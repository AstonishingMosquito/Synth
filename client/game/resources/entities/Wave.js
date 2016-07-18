import Entity from './Entity';

export default class Wave extends Entity {
    constructor(store, opts) {
      super(store);

      opts = opts || {};
      // Takes the input value or sets a default/random value
      this.color = opts.color || Math.floor(0x1000000 * Math.random());
      this.thickness = opts.thickness || Math.random() * 10;
      this.radius = opts.radius || 10;
      this.speed = opts.speed || .05;

      this.graphics = new PIXI.Graphics();
      this.graphics.position.x = opts.x || 200;
      this.graphics.position.y = opts.y || 200;
      this.container.addChild(this.graphics);
    }
    inBounds() {
      var renderer = this.store.getState().renderer;
      var gameWidth = Math.pow((Math.pow(renderer.height, 2) + Math.pow(renderer.width, 2)), .5);
      return gameWidth > this.radius;
    }
    render() {
      if (!this.inBounds()) {
        // Calls the Entity destruction method, which handles all cleanup
        this.destroy();
        return;
      }
      this.graphics.clear();
      this.graphics.lineStyle(this.thickness, this.color);
      this.graphics.drawCircle(this.graphics.position.x, this.graphics.position.y, this.radius);
      this.radius += this.radius*this.speed;
    }
}
