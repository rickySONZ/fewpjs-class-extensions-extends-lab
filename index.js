// Your code here

class Polygon {

    constructor(array){
        this.array = array
    }

    get countSides(){
        return this.array.length
    }

    get perimeter(){
        return this.array.reduce((startingValue, accumulator) => {
            return startingValue + accumulator
        })
    }
}


class Triangle extends Polygon {

    get isValid() {
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        if (this.array.length === 3 && side1 + side2 > side3 && side1 + side3 > side2 && side3 + side2 > side1){
            return true
        } else {
            return false
        }
        
    }
}

    class Square extends Polygon {

        get isValid(){
            let side1 = this.array[0]
            let side2 = this.array[1]
            let side3 = this.array[2]
            let side4 = this.array[3]

            if (this.array.length === 4 && side1 == side2 && side1 == side3 && side1 == side4){
                return true
            } else {
                return false
            }
        }

        get area(){
            let side1 = this.array[0]
            let side2 = this.array[1]
            if (this.isValid === true){
                return side1 * side2
            }
        }
    }
