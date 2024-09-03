export function isMobile(navigator: Navigator): boolean {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

type BoundingObject = {
    xCenter: number;
    yCenter: number;
}

export class Util {

    static getBoundingBox(element: HTMLElement) {
        const box: any = element.getBoundingClientRect()
        const ret: any = {}
    
        // Loops through all DomRect properties.
        // Cannot spread because they're not enumerable.
        for (const prop in box) {
            ret[prop] = box[prop]
        }
    
        ret.xCenter = (box.left + box.right) / 2
        ret.yCenter = (box.top + box.bottom) / 2
    
        return ret as BoundingObject
    }
    
    static getTime(): string {
        let now = new Date();
        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        return `${this.formatTime(hour)}:${this.formatTime(min)}:${this.formatTime(sec)}`;
    }
    
    
    static layerContainer() {
        let container = document.querySelector('.layer-container');
        let layer = document.createElement('div');
        container?.appendChild(layer);
    
        return layer;
    }
    
    static log(message: string) {
        const styles = ['color: cyan'].join(';');
        const styles2 = ['color: white'].join(';');
    
        let chalkmessage = `%c[lechixy\'s debug]%c ${message}`
        console.log(chalkmessage, styles, styles2);
    }

    static formatTime(time: number): string {
        if (time < 10) {
            return `0${time}`
        }
        return `${time}`
    }
    
    static toTimestamp(second: number): string {
        let times: string[] = [];

        if (second < 60) {
            return `0:${this.formatTime(second)}`
        } else {
            let hour = parseInt((second / 3600).toPrecision());
            if (hour !== 0) {
                times.push(this.formatTime(hour));
                second = second - (hour * 3600);
            }
            let min = parseInt((second / 60).toPrecision());
            let sec = second - (min * 60)
            times.length == 1 ? times.push(this.formatTime(min)) : times.push(min.toString())
            times.push(this.formatTime(sec));
            return times.join(':');
        }
    }
}