function WindowsError(soundLocation) {
    let count = 0;

    if (soundLocation)
        var errorSound = new Audio(soundLocation);

    let x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        y = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    let z = 0;
    this.create = (type, header, message) => {
        var element = ` <div class="win2000-error" style="left:${(x/2-200)+count*10}px; top:${(y/2-80)+count*10}px;z-index:${z++}">
                            <header>${header}</header>
                            <div class="message">
                                <img width="50px" height="50px" src="https://i.imgur.com/FupA5pb.png" />
                                <p>${message}</p>
                            </div>
                            <div class="button-container">
                                <button>OK</button>
                            </div>
                        </div>`;
        var error = document.createElement('div');
        error.innerHTML = element;
        error.addEventListener('mousedown', drag);
        error.addEventListener('mouseup', end);
        document.body.appendChild(error);
        if (errorSound)
            errorSound.cloneNode(true).play();
        count++;
    };
    var moving;

    function drag(event) {
        var target = event.target;
        moving = event;
        z++;
        $width = target.offsetWidth / 2;
        $height = target.offsetHeight / 2;
        var position = 'left:' + getStyle(target.parentNode, "left") + ';top:' + getStyle(target.parentNode, "top") + ';z-index:' + z;
        target.parentNode.setAttribute('style', position);
        if (event.target.tagName === "HEADER") {
            document.addEventListener('mousemove', function (e) {
                if (moving === event) {
                    var x = e.clientX - $width;
                    var y = e.clientY - $height;

                    var position = 'left:' + x + 'px;top:' + y + 'px;z-index:' + z;
                    target.parentNode.setAttribute('style', position);
                };
            });
        }
    };

    function end(event) {
        if (event.target.tagName === "BUTTON") {
            document.body.removeChild(event.target.parentNode.parentNode.parentNode);
            count--;
            return;
        }
        moving = false;
    };

    function getStyle(el, styleProp) {
        if (window.getComputedStyle) {
            var y = document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
        } else if (el.currentStyle) {
            var y = el.currentStyle[styleProp];
        }

        return y;
    }
}