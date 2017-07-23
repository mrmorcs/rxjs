import { Observable } from "rxjs";

let circle = document.getElementById("circle");
let source = Observable.fromEvent(document, "mousemove")
                       .map((e: MouseEvent) => {
                           return {
                                x: e.clientX,
                                y: e.clientY
                           }
                       })
                       .filter(e => e.x < 500)
                       .delay(300);
 

let go = () => { 
    source.subscribe(
        onNext,
        error => console.log(`error: ${error}`),
        () => console.log("complete")
    )
};

function onNext(value) {
    circle.style.left = value.x;
    circle.style.top = value.y;
}

go();
setTimeout(go, 5000);