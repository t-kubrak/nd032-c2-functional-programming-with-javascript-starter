// Directions: Rewrite the imperative code below as Object-Oriented 

let status = 'active'
let warp = 2
let type = 'Dilithium Crystal'
let status_report = 'Captain, '



class Ship
{
    constructor(
        status = 'active',
        warp = 2,
        type = 'Dilithium Crystal',
        status_report = 'Captain, '
    ) {
        this.status = status;
        this.warp = warp;
        this.type = type;
        this.status_report = status_report;
    }

    getStatusReport() {
        if(this.status === 'active' && warp <= 4) {
            this.status_report += 'the engines are active and we could be going faster.'
        } else if (this.status === 'active' && warp > 4) {
            this.status_report += 'the engines are active and we are going ' + warp + '.'
        } else if (this.status === 'down') {
            this.status_report += 'the engines are down.'
        } else {
            this.status_report += 'the comms are down and we can`t reach engineering.'
        }

        return this.status_report;
    }
}

const ship = new Ship();

console.log(ship.getStatusReport())
