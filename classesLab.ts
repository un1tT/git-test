// Вариант 9
// Релизуйте класс с использованием JavaScript Населённый пункт с двумя свойствами (на ваш выбор) и двумя методами
// и двух его наследников у которых будет как минимум один дополнительный метод и свойство

abstract class Place {
    private readonly name: string;
    private readonly region: string;

    callLocalPolice = (): void => {
        console.log('Police is coming Wee wee!!!');
    }

    getName = (): string => this.name;

    protected constructor(name: string, region: string) {
        this.name = name;
        this.region = region;
    }
}

class Town extends Place {
    private readonly amountOfCars: number;

    getAmountOfCars = (): void => {
        console.log(this.amountOfCars);
    }

    constructor(name: string, region: string, amountOfCars: number) {
        super(name, region);

        this.amountOfCars = amountOfCars;
    }
}

class Village extends Place {
    private readonly schoolExists: boolean;

    doesSchoolExistsHere = (): boolean => {
        return this.schoolExists;
    }

    constructor(name: string, region: string, schoolExists: boolean) {
        super(name, region);

        this.schoolExists = schoolExists;
    }
}

const seversk = new Town('Seversk', 'Tomsk', 200);
console.log(`Lets find out how many cars does ${seversk.getName()} have: `);
seversk.getAmountOfCars();

const ozernoe = new Village('Ozernoe', 'Tomsk', false);
console.log(`Lets find out if ${ozernoe.getName()} has a school: `);
console.log(ozernoe.doesSchoolExistsHere());
