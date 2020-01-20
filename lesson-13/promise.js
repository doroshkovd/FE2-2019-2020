function Timer(elem, current, done) {
    this.elem = elem;
    this.current = current;
    this.done = done;
    this.timerId;

    this.start = () => {
        this.timerId = setInterval(() => {
            this.current -= 1;
            this.elem.innerHTML = this.current;
            if (this.current === 0) {
                this.pause();
                this.done ? this.done() : null;
            }
        }, 1000);
    };
    this.pause = () => {
      clearTimeout(this.timerId);
    };

    this.reset = (elem, current, done) => {
        this.elem = elem;
        this.current = current;
        this.done = done;
    }
}