var confetti = {
    start: function(){
        var duration = 5 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            var colors = ['#ff0', '#0f0', '#00f', '#f0f', '#0ff', '#f00'];
            for (var i = 0; i < 5; i++) {
                var particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = (Math.random() * 100) + '%';
                particle.style.top = '-10px';
                particle.style.width = '10px';
                particle.style.height = '10px';
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.opacity = Math.random();
                particle.style.animation = 'fall 3s linear forwards';
                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 3000);
            }
            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    },
    stop: function(){}
};

var style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to { transform: translateY(100vh); }
}
`;
document.head.appendChild(style);
