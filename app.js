var vue = new Vue({
    el: '#app',
    data: {
        yourHealth: 100,
        monsterHealth: 100,
        isGameRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.isGameRunning = true;
            this.yourHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            var damage = this.calculateDamage(3, 5);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            })
            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();
            this.checkWin();
        },
        specialAttack: function () {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heavy hits Monster for ' + damage
            })
            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();
            this.checkWin();
        },
        heal: function () {
            if (this.yourHealth <= 90) {
                this.yourHealth += 10;
            } else {
                this.yourHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heal ' + damage
            })
            this.monsterAttack();
        },
        monsterAttack: function () {
            damage = this.calculateDamage(5, 12);
            this.yourHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            })
        },
        giveUp: function () {
            this.isGameRunning = false;
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.isGameRunning = false;
                }
                return true;
            } else if (this.yourHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.isGameRunning = false;
                }
            }
        }

    }
})