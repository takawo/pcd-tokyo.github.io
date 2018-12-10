import p5 from 'p5'

module.exports = (p) => {
    p.preload = () => {

    }

    p.setup = () => {
        let canvas = p.createCanvas(window.innerWidth, window.innerHeight).parent('p5canvas');
        p.background(240, 0, 0);
    }

    p.draw = () => {

    }

    p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
    }

}

// export default function initP5() {
//     return new p5(sketch);
// }