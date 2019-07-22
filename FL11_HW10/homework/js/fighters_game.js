function Fighter(name, damage, hp, agility){
    let win = 0;
    let lose = 0;

    this.getName = function(){
        return name;
    };

    this.getDamage = function(){
        return damage;
    };

    this.getHp = function(){
        return hp;
    };

    this.getAgility = function(){
        return agility;
    };

    this.heal = function(healHp){
        this.hp += healHp;
    };

    this.dealDamage = function(dam){
        this.hp -= dam;
        if(this.hp <= 0){
            this.hp = 0;
        }
    };

    this.addWin = function(){
        win++;
    };

    this.addLoss = function(){
        lose++;
    };

    this.logCombatHistory = function(){
        console.log(`Name: ${name}, Wins: ${win}, Losses: ${lose}`);
    };

    this.attack = function(defender){
        let maxAttackChance = 100;
        let attackChance = maxAttackChance - defender.getAgility();
        if(attackChance > Math.floor(Math.random() * maxAttackChance)){
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    };
}

const firstFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const secondFighter = new Fighter({name: 'Bill', damage: 15, hp: 100, agility: 35});

function battle(firstFighter, secondFighter){
    if(firstFighter.getHp() <= 0){
        console.log(`${firstFighter.getName()} is dead!`);
    } else if( secondFighter.getHp() <= 0){
        console.log(`${secondFighter.getName()} is dead!`);
    }
    while(firstFighter.getHp() > 0 && secondFighter.getHp() > 0){
        let attack = false;
        if(attack === false){
            firstFighter.attack(secondFighter);
            attack = true;
        }

        if(attack === true){
            secondFighter.attack(firstFighter);
            attack = false;
        }
    }

    if(secondFighter.getHp() <= 0){
        secondFighter.addLoss();
        firstFighter.addWin();
    }

    if(firstFighter.getHp() <= 0){
        firstFighter.addLoss();
        secondFighter.addWin();
    }
}

