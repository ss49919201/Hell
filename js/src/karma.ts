class Karma implements Karmaable {
    constructor(public element: HTMLDivElement) {
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler(): void {
        this.element.classList.toggle('karma--active');
        const point = Point.getInstance();
    }
}