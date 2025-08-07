class MemoryGame {
    constructor() {
        this.cards = []
        this.flippedCards = []
        this.matchedPairs = 0
        this.moves = 0
        this.startTime = null
        this.timerInterval = null
        this.isPaused = false
        this.gameBoard = false
        this.gameBoard = document.getElementById('gameBoard')
        this.coupleDisplay = document.getElementById('coupleDisplay')

        // Anime couples - each couple has 2 images (male & female)
        this.animeCouples = [
          {
            id: 1,
            name: "Rintarou & Kaoruko",
            male: { image: '/images/rintarou.webp', name: "Rintarou" },
            female: { image: '/images/kaoruko.png', name: "Kaoruko" }
          },
          {
            id: 2,
            name: "Wakana & Marin",
            male: { image: '/images/Wakana.jpg', name: "Wakana" },
            female: { image: '/images/Marin.jpg', name: "Marin" }
          },
          {
            id: 3,
            name: "Sakuta & Mai",
            male: { image: '/images/sakuta.webp', name: "Sakuta" },
            female: { image: '/images/Mai.webp', name: "Mai" }
          },
          {
            id: 4,
            name: "Ryou & Sera",
            male: { image: '/images/ryou.avif', name: "Ryou" },
            female: { image: '/images/sera.jpg', name: "Sera" }
          },
          {
            id: 5,
            name: "Kou & Nazuna",
            male: { image: '/images/kou.avif', name: "Kou" },
            female: { image: '/images/nazuna.avif', name: "Nazuna" }
          },
          {
            id: 6,
            name: "Yuu & Niko",
            male: { image: '/images/yuu.webp', name: "Yuu" },
            female: { image: '/images/niko.jpg', name: "Niko" }
          },
          {
            id: 7,
            name: "Nagi & Erika",
            male: { image: '/images/nagi.jpg', name: "Nagi" },
            female: { image: '/images/erika.jpg', name: "Erika" }
          },
          {
            id: 8,
            name: "Okarun & Momo",
            male: { image: '/images/Okarun.avif', name: "Okarun" },
            female: { image: '/images/momo.jpeg', name: "Momo" }
          },
        ]

        this.initGame()
    }

    initGame() {
        this.createCards()
        this.shuffleCards()
        this.renderCards()
        this.startTimer()
    }

    createCards() {
        this.cards = []
        // Create cards for each couple (male and female)
        this.animeCouples.forEach((couple) => {
            // Male card
            this.cards.push({
                coupleId: couple.id,
                coupleName: couple.name,
                gender: "male",
                image: couple.male.image,
                characterName: couple.male.name,
                matched: false,
            })

            // Female Card
            this.cards.push({
                coupleId: couple.id,
                coupleName: couple.name,
                gender: "female",
                image: couple.female.image,
                characterName: couple.female.name,
                matched: false,
            })
        })
    }

    shuffleCards() {
        for(let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
        }
    }

    renderCards() {
        this.gameBoard.innerHTML = ""
        this.cards.forEach((card, index) => {
            const cardElement = document.createElement('div')
            cardElement.className = 'card'
            cardElement.dataset.index = index
            cardElement.innerHTML = `
                <div class="card-face card-back">
                    <ion-icon name="heart-outline"></ion-icon>
                    <div class="couple-text">Anime<br>Couple</div>
                </div>
                <div class="card-face card-front">
                    <img src="${card.image}" alt="${card.characterName}">
                    <div class="character-label ${card.gender}">
                        ${card.characterName}
                    </div>
                </div>
            `
            cardElement.addEventListener('click', () => this.flipCard(index))
            this.gameBoard.appendChild(cardElement)
        })
    }

    flipCard(index) {
        if(this.isPaused || this.flippedCards.length >= 2) return

        const card = this.cards[index]
        const cardElement = this.gameBoard.children[index]

        if(card.matched || this.flippedCards.includes(index)) return

        cardElement.classList.add('flipped')
        this.flippedCards.push(index)

        if(this.flippedCards.length === 2) {
            this.moves++
            this.updateMoves()
            setTimeout(() => this.checkMatch(), 1000);
        }
    }

    checkMatch() {
        const [firstIndex, secondIndex] = this.flippedCards
        const firstCard = this.cards[firstIndex]
        const secondCard = this.cards[secondIndex]

        // Check if both cards are from the same couple but different gender
        if(firstCard.coupleId === secondCard.coupleId && firstCard.gender !== secondCard.gender) {
            // Match found!
            firstCard.matched = true
            secondCard.matched = true
            this.matchedPairs++

            const firstElement = this.gameBoard.children[firstIndex]
            const secondElement = this.gameBoard.children[secondIndex]

            // Add matched class to hide labels
            firstElement.classList.add('matched', 'match-animation')
            secondElement.classList.add('matched', 'match-animation')

            // Show the matched couple
            this.showCoupleMatch(firstCard.coupleId)

            setTimeout(() => {
                firstElement.classList.remove('match-animation')
                secondElement.classList.remove('match-animation')
            }, 1000);

            this.updateMatches()

            if(this.matchedPairs === 8) {
                setTimeout(() => this.gameComplete(), 1500);
            }
        } else {
            // No Match
            const firstElement = this.gameBoard.children[firstIndex]
            const secondElement = this.gameBoard.children[secondIndex]

            firstElement.classList.add('shake')
            secondElement.classList.add('shake')

            setTimeout(() => {
                firstElement.classList.remove('flipped', 'shake')
                secondElement.classList.remove('flipped', 'shake')
            }, 500);
        }

        this.flippedCards = []
    }

    showCoupleMatch(coupleId) {
        // Find couple by ID
        const couple = this.animeCouples.find((c) => c.id === coupleId)

        // Set couple images and name
        document.getElementById('maleImage').src = couple.male.image
        document.getElementById('femaleImage').src = couple.female.image
        document.getElementById('coupleName').textContent = couple.name

        // Show popup
        this.coupleDisplay.classList.add('show')

        // Hide popup after 2 seconds
        setTimeout(() => {
            this.coupleDisplay.classList.remove('show')
        }, 2000);
    }

    startTimer() {
        this.startTime = Date.now()
        this.timerInterval = setInterval(() => {
            if(!this.isPaused) {
                const elapsed = Date.now() - this.startTime
                const minutes = Math.floor(elapsed / 60000)
                const seconds = Math.floor((elapsed % 60000) / 1000)
                document.getElementById('timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
            }
        }, 1000)
    }

    updateMoves() {
        document.getElementById('moves').textContent = `Moves: ${this.moves}`
    }

    updateMatches() {
        document.getElementById('matches').textContent = `Couples: ${this.matchedPairs}/8`
    }

    gameComplete() {
        clearInterval(this.timerInterval)
        const finalTime = document.getElementById('timer').textContent
        document.getElementById('finalStats').innerHTML = `
        <strong>Time:</strong> ${finalTime}<br>
        <strong>Moves:</strong> ${this.moves}<br>
        <strong>Score:</strong> ${this.calculateScore()}
        `
        document.getElementById('gameOver').style.display = 'flex'
    }

    calculateScore() {
        const timeBonus = Math.max(0, 300 - (Date.now() - this.startTime) / 1000)
        const moveBonus = Math.max(0, 50 - this.moves)
        return Math.round(timeBonus + moveBonus + 100)
    }

    pause() {
        this.isPaused = !this.isPaused
        const pauseBtn = document.querySelector('.controls .btn:nth-child(2)')
        const icon = pauseBtn.querySelector('ion-icon')
        const text = pauseBtn.childNodes[2]

        if(this.isPaused) {
            icon.setAttribute('name', 'play-outline')
            text.textContent = ' Resume'
            this.gameBoard.style.pointerEvents = 'none'
            this.gameBoard.style.opacity = '0.5'
        } else {
            icon.setAttribute('name', 'pause-outline')
            text.textContent = ' Pause'
            this.gameBoard.style.pointerEvents = 'auto'
            this.gameBoard.style.opacity = '1'
        }
    }

    showHint() {
        if(this.flippedCards.length > 0) return

        // Find two unmatched cards from the same couple
        const unmatchedCards = this.cards.map((card, index) => ({ ...card, index })).filter((card) => !card.matched)

        for(let i = 0; i < unmatchedCards.length; i++) {
            for(let j = i + 1; j < unmatchedCards.length; j++) {
                if (
                    unmatchedCards[i].coupleId === unmatchedCards[j].coupleId &&
                    unmatchedCards[i].gender !== unmatchedCards[j].gender
                ) {
                    const firstElement = this.gameBoard.children[unmatchedCards[i].index]
                    const secondElement = this.gameBoard.children[unmatchedCards[j].index]

                    firstElement.classList.add('pulse')
                    secondElement.classList.add('pulse')

                    setTimeout(() => {
                        firstElement.classList.remove('pulse')
                        secondElement.classList.remove('pulse')
                    }, 2000);

                    return
                }
            }
        }
    }

    reset() {
        clearInterval(this.timerInterval)
        this.flippedCards = []
        this.matchedPairs = 0
        this.moves = 0
        this.isPaused = false
        document.getElementById('gameOver').style.display = 'none'
        document.getElementById('timer').textContent = '00:00'
        document.getElementById('moves').textContent = 'Moves: 0'
        document.getElementById('matches').textContent = 'Couples: 0/8'
        this.gameBoard.style.pointerEvents = 'auto'
        this.gameBoard.style.opacity = '1'
        this.initGame()
    }
}

const game = new MemoryGame()

function startNewGame() {
    game.reset()
}

function pauseGame() {
    game.pause()
}

function showHint() {
    game.showHint()
}