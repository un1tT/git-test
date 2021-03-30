// Вариант 9
// Релизуйте класс с использованием JavaScript Населённый пункт с двумя свойствами (на ваш выбор) и двумя методами
// и двух его наследников у которых будет как минимум один дополнительный метод и свойство

class Place {
    readonly name: string;
    readonly region: string;

    callLocalPolice = (): void => {
        console.log('Police is coming Wee wee!!!');
    }

    getName = (): void => {
        console.log(this.name);
    }

    constructor(name: string, region: string) {
        this.name = name;
        this.region = region;
    }
}

class Town extends Place {
    readonly amountOfCars: number;

    getAmountOfCars = (): void => {
        console.log(this.amountOfCars);
    }

    constructor(name: string, region: string, amountOfCars: number) {
        super(name, region);

        this.amountOfCars = amountOfCars;
    }
}

class Village extends Place {
    readonly schoolExists: boolean;

    doesSchoolExistsHere = (): boolean => {
        return this.schoolExists;
    }

    constructor(name: string, region: string, schoolExists: boolean) {
        super(name, region);

        this.schoolExists = schoolExists;
    }
}

const place = new Place('some location', 'Tomsk');
console.log(`Lets call ${place.name} police: `);
place.callLocalPolice();

const seversk = new Town('Seversk', 'Tomsk', 200);
console.log(`Lets find out how many cars does ${seversk.name} have: `);
seversk.getAmountOfCars();

const ozernoe = new Village('Ozernoe', 'Tomsk', false);
console.log(`Lets find out if ${ozernoe.name} has a school: `);
console.log(ozernoe.doesSchoolExistsHere());
