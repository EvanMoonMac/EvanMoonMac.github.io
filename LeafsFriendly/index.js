class Player {
    constructor(name, salary, bonus, term, expiry, position, age, handed, clause) {
        this.name = name;
        this.salary = salary;
        this.bonus = bonus;
        this.term = term;
        this.expiry = expiry;
        this.position = position;
        this.age = age;
        this.handed = handed;
        this.clause = clause;
    }

    get_name() {
        return this.name;
    }

    get_salary() {
        return this.salary;
    }

    get_bonus() {
        return this.bonus;
    }

    get_term() {
        return this.term;
    }

    get_expiry() {
        return this.expiry;
    }

    get_position() {
        return this.position;
    }

    get_age() {
        return this.age;
    }

    get_handed() {
        return this.handed;
    }

    get_clause() {
        return this.clause;
    }
}

//-----------------------------------------PLAYER DATA------------------------------------------

var matthews_auston = new Player("Auston Matthews", 13250000, 0, 4, "UFA", "C", 26, "LH", "NMC");
var tavares_john = new Player("John Tavares", 11000000, 0, 1, "UFA", "C", 33, "LH", "NMC");
var nylander_william = new Player("William Nylander", 11500000, 0, 8, "UFA", "RW", 28, "RH", "NMC");
var marner_mitchell = new Player("Mitchell Marner", 10903000, 0, 1, "UFA", "RW", 27, "RH", "NMC");
var kampf_david = new Player("David Kampf", 2400000, 0, 3, "UFA", "C", 29, "LH", "M-NTC");
var jarnkrok_calle = new Player("Calle Jarnkrok", 2100000, 0, 2, "UFA", "RW", 32, "RH", "M-NTC");
var reaves_ryan = new Player("Ryan Reaves", 1350000, 0, 2, "UFA", "RW", 37, "RH", "None");
var mcmann_bobby = new Player("Bobby McMann", 1350000, 0, 2, "UFA", "LW", 28, "LH", "None");
var knies_matthew = new Player("Matthew Knies", 925000, 0, 1, "RFA", "LW", 21, "LH", "None");
var holmberg_pontus = new Player("Pontus Holmberg", 800000, 0, 1, "RFA (Arb)", "C", 25, "LH", "None");
var cowan_easton = new Player("Easton Cowan", 904667, 0, 3, "RFA", "LW", 19, "LH", "None");
var minten_fraser = new Player("Fraser Minten", 816667, 0, 3, "RFA", "C", 19, "LH", "None");

var rielly_morgan = new Player("Morgan Rielly", 7500000, 0, 6, "UFA", "LD", 30, "LH", "NMC");
var mccabe_jake = new Player("Jake McCabe", 2000000, 0, 1, "UFA", "LD", 30, "LH", "M-NTC");
var benoit_simon = new Player("Simon Benoit", 1350000, 0, 3, "UFA", "LD", 25, "LH", "None");
var timmins_conor = new Player("Conor Timmins", 1100000, 0, 1, "RFA (Arb)", "RD", 25, "RH", "None");

var woll_joseph = new Player("Joseph Woll", 766667, 0, 1, "RFA (Arb)", "G", 25, "LH", "None");
var hildeby_dennis = new Player("Dennis Hildeby", 843333, 0, 1, "RFA", "G", 22, "LH", "None");

player_list = [];
player_list.push(matthews_auston);
player_list.push(tavares_john);
player_list.push(nylander_william);
player_list.push(marner_mitchell);
player_list.push(kampf_david);
player_list.push(jarnkrok_calle);
player_list.push(reaves_ryan);
player_list.push(mcmann_bobby);
player_list.push(knies_matthew);
player_list.push(holmberg_pontus);
player_list.push(cowan_easton);
player_list.push(minten_fraser);
player_list.push(rielly_morgan);
player_list.push(mccabe_jake);
player_list.push(benoit_simon);
player_list.push(timmins_conor);
player_list.push(woll_joseph);
player_list.push(hildeby_dennis);

//----------------------------------------------------------------------------------------------

var roster_size_raw = document.getElementById("roster_size");
var cap_ceiling_raw = document.getElementById("cap_ceiling");
var cap_hit_raw = document.getElementById("cap_hit");
var overages_raw = document.getElementById("overages");
var bonuses_raw = document.getElementById("bonuses");
var cap_space_raw = document.getElementById("cap_space");

const roster_size = Number(roster_size_raw.innerHTML);
const cap_ceiling = Number(cap_ceiling_raw.innerHTML);
const cap_hit = Number(cap_hit_raw.innerHTML);
const overages = Number(overages_raw.innerHTML);
const bonuses = Number(bonuses_raw.innerHTML);
const cap_space = Number(cap_space_raw.innerHTML);

cap_space_raw.textContent = cap_ceiling - overages;

//------------------------------ LW1 --------------------------------------

document.getElementById("lw1");

lw1.addEventListener('change', update_lw1);

lw1_flag = false;
lw1_last_player = null;

function update_lw1() {
    var selected_player_key = lw1.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("lw1_player_age").textContent = "Age"
        document.getElementById("lw1_player_position").textContent = "Position";
        document.getElementById("lw1_player_handedness").textContent = "Handedness";
        document.getElementById("lw1_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("lw1_player_term").textContent = "Expiry (Term)";
        document.getElementById("lw1_player_clause").textContent = "Clause";

        if (lw1_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw1_flag = false;
        }

        if (lw1_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(lw1_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(lw1_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(lw1_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            lw1_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("lw1_player_age").textContent = "Age " + age;
        document.getElementById("lw1_player_position").textContent = position;
        document.getElementById("lw1_player_handedness").textContent = handed;
        document.getElementById("lw1_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("lw1_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("lw1_player_clause").textContent = clause;

        //---------------------------------------------------
        if (lw1_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw1_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (lw1_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            lw1_last_player = selected_player;
        }

        if (lw1_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(lw1_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(lw1_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(lw1_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            lw1_last_player = selected_player;
        }
    }
}

//------------------------------ C1 --------------------------------------

document.getElementById("c1");

c1.addEventListener('change', update_c1);

c1_flag = false;
c1_last_player = null;

function update_c1() {
    var selected_player_key = c1.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("c1_player_age").textContent = "Age"
        document.getElementById("c1_player_position").textContent = "Position";
        document.getElementById("c1_player_handedness").textContent = "Handedness";
        document.getElementById("c1_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("c1_player_term").textContent = "Expiry (Term)";
        document.getElementById("c1_player_clause").textContent = "Clause";

        if (c1_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c1_flag = false;
        }

        if (c1_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(c1_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(c1_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(c1_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            c1_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("c1_player_age").textContent = "Age " + age;
        document.getElementById("c1_player_position").textContent = position;
        document.getElementById("c1_player_handedness").textContent = handed;
        document.getElementById("c1_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("c1_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("c1_player_clause").textContent = clause;

        //---------------------------------------------------
        if (c1_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c1_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (c1_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            c1_last_player = selected_player;
        }

        if (c1_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(c1_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(c1_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(c1_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            c1_last_player = selected_player;
        }
    }
}

//------------------------------ RW1 --------------------------------------

document.getElementById("rw1");

rw1.addEventListener('change', update_rw1);

rw1_flag = false;
rw1_last_player = null;

function update_rw1() {
    var selected_player_key = rw1.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("rw1_player_age").textContent = "Age"
        document.getElementById("rw1_player_position").textContent = "Position";
        document.getElementById("rw1_player_handedness").textContent = "Handedness";
        document.getElementById("rw1_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("rw1_player_term").textContent = "Expiry (Term)";
        document.getElementById("rw1_player_clause").textContent = "Clause";

        if (rw1_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw1_flag = false;
        }

        if (rw1_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(rw1_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(rw1_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(rw1_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rw1_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("rw1_player_age").textContent = "Age " + age;
        document.getElementById("rw1_player_position").textContent = position;
        document.getElementById("rw1_player_handedness").textContent = handed;
        document.getElementById("rw1_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("rw1_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("rw1_player_clause").textContent = clause;

        //---------------------------------------------------
        if (rw1_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw1_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (rw1_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rw1_last_player = selected_player;
        }

        if (rw1_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(rw1_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(rw1_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(rw1_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rw1_last_player = selected_player;
        }
    }
}

//------------------------------ LW2 --------------------------------------

document.getElementById("lw2");

lw2.addEventListener('change', update_lw2);

lw2_flag = false;
lw2_last_player = null;

function update_lw2() {
    var selected_player_key = lw2.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("lw2_player_age").textContent = "Age"
        document.getElementById("lw2_player_position").textContent = "Position";
        document.getElementById("lw2_player_handedness").textContent = "Handedness";
        document.getElementById("lw2_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("lw2_player_term").textContent = "Expiry (Term)";
        document.getElementById("lw2_player_clause").textContent = "Clause";

        if (lw2_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw2_flag = false;
        }

        if (lw2_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(lw2_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(lw2_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(lw2_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            lw2_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("lw2_player_age").textContent = "Age " + age;
        document.getElementById("lw2_player_position").textContent = position;
        document.getElementById("lw2_player_handedness").textContent = handed;
        document.getElementById("lw2_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("lw2_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("lw2_player_clause").textContent = clause;

        //---------------------------------------------------
        if (lw2_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw2_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (lw2_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            lw2_last_player = selected_player;
        }

        if (lw2_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(lw2_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(lw2_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(lw2_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            lw2_last_player = selected_player;
        }
    }
}

//------------------------------ C2 --------------------------------------

document.getElementById("c2");

c2.addEventListener('change', update_c2);

c2_flag = false;
c2_last_player = null;

function update_c2() {
    var selected_player_key = c2.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("c2_player_age").textContent = "Age"
        document.getElementById("c2_player_position").textContent = "Position";
        document.getElementById("c2_player_handedness").textContent = "Handedness";
        document.getElementById("c2_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("c2_player_term").textContent = "Expiry (Term)";
        document.getElementById("c2_player_clause").textContent = "Clause";

        if (c2_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c2_flag = false;
        }

        if (c2_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(c2_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(c2_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(c2_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            c2_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("c2_player_age").textContent = "Age " + age;
        document.getElementById("c2_player_position").textContent = position;
        document.getElementById("c2_player_handedness").textContent = handed;
        document.getElementById("c2_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("c2_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("c2_player_clause").textContent = clause;

        //---------------------------------------------------
        if (c2_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c2_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (c2_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            c2_last_player = selected_player;
        }

        if (c2_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(c2_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(c2_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(c2_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            c2_last_player = selected_player;
        }
    }
}

//------------------------------ RW2 --------------------------------------

document.getElementById("rw2");

rw2.addEventListener('change', update_rw2);

rw2_flag = false;
rw2_last_player = null;

function update_rw2() {
    var selected_player_key = rw2.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("rw2_player_age").textContent = "Age"
        document.getElementById("rw2_player_position").textContent = "Position";
        document.getElementById("rw2_player_handedness").textContent = "Handedness";
        document.getElementById("rw2_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("rw2_player_term").textContent = "Expiry (Term)";
        document.getElementById("rw2_player_clause").textContent = "Clause";

        if (rw2_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw2_flag = false;
        }

        if (rw2_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - rw2_last_player.get_salary();
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - rw2_last_player.get_bonus();
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + rw2_last_player.get_salary();
            document.getElementById("cap_space").textContent = new_cap_space;

            rw2_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("rw2_player_age").textContent = "Age " + age;
        document.getElementById("rw2_player_position").textContent = position;
        document.getElementById("rw2_player_handedness").textContent = handed;
        document.getElementById("rw2_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("rw2_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("rw2_player_clause").textContent = clause;

        //---------------------------------------------------
        if (rw2_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw2_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (rw2_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rw2_last_player = selected_player;
        }

        if (rw2_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(rw2_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(rw2_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(rw2_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rw2_last_player = selected_player;
        }
    }
}

//------------------------------ LW3 --------------------------------------

document.getElementById("lw3");

lw3.addEventListener('change', update_lw3);

lw3_flag = false;
lw3_last_player = null;

function update_lw3() {
    var selected_player_key = lw3.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("lw3_player_age").textContent = "Age"
        document.getElementById("lw3_player_position").textContent = "Position";
        document.getElementById("lw3_player_handedness").textContent = "Handedness";
        document.getElementById("lw3_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("lw3_player_term").textContent = "Expiry (Term)";
        document.getElementById("lw3_player_clause").textContent = "Clause";

        if (lw3_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw3_flag = false;
        }

        if (lw3_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(lw3_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(lw3_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(lw3_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            lw3_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("lw3_player_age").textContent = "Age " + age;
        document.getElementById("lw3_player_position").textContent = position;
        document.getElementById("lw3_player_handedness").textContent = handed;
        document.getElementById("lw3_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("lw3_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("lw3_player_clause").textContent = clause;

        //---------------------------------------------------
        if (lw3_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw3_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (lw3_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            lw3_last_player = selected_player;
        }

        if (lw3_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(lw3_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(lw3_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(lw3_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            lw3_last_player = selected_player;
        }
    }
}

//------------------------------ C3 --------------------------------------

document.getElementById("c3");

c3.addEventListener('change', update_c3);

c3_flag = false;
c3_last_player = null;

function update_c3() {
    var selected_player_key = c3.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("c3_player_age").textContent = "Age"
        document.getElementById("c3_player_position").textContent = "Position";
        document.getElementById("c3_player_handedness").textContent = "Handedness";
        document.getElementById("c3_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("c3_player_term").textContent = "Expiry (Term)";
        document.getElementById("c3_player_clause").textContent = "Clause";

        if (c3_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c3_flag = false;
        }

        if (c3_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(c3_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(c3_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(c3_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            c3_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("c3_player_age").textContent = "Age " + age;
        document.getElementById("c3_player_position").textContent = position;
        document.getElementById("c3_player_handedness").textContent = handed;
        document.getElementById("c3_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("c3_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("c3_player_clause").textContent = clause;

        //---------------------------------------------------
        if (c3_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c3_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (c3_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            c3_last_player = selected_player;
        }

        if (c3_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(c3_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(c3_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(c3_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            c3_last_player = selected_player;
        }
    }
}

//------------------------------ RW3 --------------------------------------

document.getElementById("rw3");

rw3.addEventListener('change', update_rw3);

rw3_flag = false;
rw3_last_player = null;

function update_rw3() {
    var selected_player_key = rw3.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("rw3_player_age").textContent = "Age"
        document.getElementById("rw3_player_position").textContent = "Position";
        document.getElementById("rw3_player_handedness").textContent = "Handedness";
        document.getElementById("rw3_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("rw3_player_term").textContent = "Expiry (Term)";
        document.getElementById("rw3_player_clause").textContent = "Clause";

        if (rw3_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw3_flag = false;
        }

        if (rw3_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(rw3_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(rw3_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(rw3_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rw3_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("rw3_player_age").textContent = "Age " + age;
        document.getElementById("rw3_player_position").textContent = position;
        document.getElementById("rw3_player_handedness").textContent = handed;
        document.getElementById("rw3_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("rw3_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("rw3_player_clause").textContent = clause;

        //---------------------------------------------------
        if (rw3_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw3_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (rw3_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rw3_last_player = selected_player;
        }

        if (rw3_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(rw3_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(rw3_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(rw3_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rw3_last_player = selected_player;
        }
    }
}

//------------------------------ LW4 --------------------------------------

document.getElementById("lw4");

lw4.addEventListener('change', update_lw4);

lw4_flag = false;
lw4_last_player = null;

function update_lw4() {
    var selected_player_key = lw4.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("lw4_player_age").textContent = "Age"
        document.getElementById("lw4_player_position").textContent = "Position";
        document.getElementById("lw4_player_handedness").textContent = "Handedness";
        document.getElementById("lw4_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("lw4_player_term").textContent = "Expiry (Term)";
        document.getElementById("lw4_player_clause").textContent = "Clause";

        if (lw4_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw4_flag = false;
        }

        if (lw4_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(lw4_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(lw4_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(lw4_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            lw4_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("lw4_player_age").textContent = "Age " + age;
        document.getElementById("lw4_player_position").textContent = position;
        document.getElementById("lw4_player_handedness").textContent = handed;
        document.getElementById("lw4_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("lw4_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("lw4_player_clause").textContent = clause;

        //---------------------------------------------------
        if (lw4_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw4_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (lw4_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            lw4_last_player = selected_player;
        }

        if (lw4_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(lw4_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(lw4_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(lw4_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            lw4_last_player = selected_player;
        }
    }
}

//------------------------------ C4 --------------------------------------

document.getElementById("c4");

c4.addEventListener('change', update_c4);

c4_flag = false;
c4_last_player = null;

function update_c4() {
    var selected_player_key = c4.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("c4_player_age").textContent = "Age"
        document.getElementById("c4_player_position").textContent = "Position";
        document.getElementById("c4_player_handedness").textContent = "Handedness";
        document.getElementById("c4_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("c4_player_term").textContent = "Expiry (Term)";
        document.getElementById("c4_player_clause").textContent = "Clause";

        if (c4_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c4_flag = false;
        }

        if (c4_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(c4_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(c4_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(c4_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            c4_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("c4_player_age").textContent = "Age " + age;
        document.getElementById("c4_player_position").textContent = position;
        document.getElementById("c4_player_handedness").textContent = handed;
        document.getElementById("c4_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("c4_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("c4_player_clause").textContent = clause;

        //---------------------------------------------------
        if (c4_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c4_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (c4_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            c4_last_player = selected_player;
        }

        if (c4_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(c4_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(c4_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(c4_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            c4_last_player = selected_player;
        }
    }
}

//------------------------------ RW4 --------------------------------------

document.getElementById("rw4");

rw4.addEventListener('change', update_rw4);

rw4_flag = false;
rw4_last_player = null;

function update_rw4() {
    var selected_player_key = rw4.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("rw4_player_age").textContent = "Age"
        document.getElementById("rw4_player_position").textContent = "Position";
        document.getElementById("rw4_player_handedness").textContent = "Handedness";
        document.getElementById("rw4_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("rw4_player_term").textContent = "Expiry (Term)";
        document.getElementById("rw4_player_clause").textContent = "Clause";

        if (rw4_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw4_flag = false;
        }

        if (rw4_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(rw4_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(rw4_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(rw4_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rw4_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("rw4_player_age").textContent = "Age " + age;
        document.getElementById("rw4_player_position").textContent = position;
        document.getElementById("rw4_player_handedness").textContent = handed;
        document.getElementById("rw4_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("rw4_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("rw4_player_clause").textContent = clause;

        //---------------------------------------------------
        if (rw4_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw4_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (rw4_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rw4_last_player = selected_player;
        }

        if (rw4_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(rw4_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(rw4_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(rw4_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rw4_last_player = selected_player;
        }
    }
}

//------------------------------ LD1 --------------------------------------

document.getElementById("ld1");

ld1.addEventListener('change', update_ld1);

ld1_flag = false;
ld1_last_player = null;

function update_ld1() {
    var selected_player_key = ld1.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("ld1_player_age").textContent = "Age"
        document.getElementById("ld1_player_position").textContent = "Position";
        document.getElementById("ld1_player_handedness").textContent = "Handedness";
        document.getElementById("ld1_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("ld1_player_term").textContent = "Expiry (Term)";
        document.getElementById("ld1_player_clause").textContent = "Clause";

        if (ld1_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            ld1_flag = false;
        }

        if (ld1_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(ld1_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(ld1_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(ld1_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            ld1_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("ld1_player_age").textContent = "Age " + age;
        document.getElementById("ld1_player_position").textContent = position;
        document.getElementById("ld1_player_handedness").textContent = handed;
        document.getElementById("ld1_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("ld1_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("ld1_player_clause").textContent = clause;

        //---------------------------------------------------
        if (ld1_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            ld1_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (ld1_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            ld1_last_player = selected_player;
        }

        if (ld1_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(ld1_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(ld1_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(ld1_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            ld1_last_player = selected_player;
        }
    }
}

//------------------------------ RD1 --------------------------------------

document.getElementById("rd1");

rd1.addEventListener('change', update_rd1);

rd1_flag = false;
rd1_last_player = null;

function update_rd1() {
    var selected_player_key = rd1.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("rd1_player_age").textContent = "Age"
        document.getElementById("rd1_player_position").textContent = "Position";
        document.getElementById("rd1_player_handedness").textContent = "Handedness";
        document.getElementById("rd1_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("rd1_player_term").textContent = "Expiry (Term)";
        document.getElementById("rd1_player_clause").textContent = "Clause";

        if (rd1_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rd1_flag = false;
        }

        if (rd1_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(rd1_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(rd1_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(rd1_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rd1_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("rd1_player_age").textContent = "Age " + age;
        document.getElementById("rd1_player_position").textContent = position;
        document.getElementById("rd1_player_handedness").textContent = handed;
        document.getElementById("rd1_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("rd1_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("rd1_player_clause").textContent = clause;

        //---------------------------------------------------
        if (rd1_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rd1_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (rd1_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rd1_last_player = selected_player;
        }

        if (rd1_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(rd1_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(rd1_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(rd1_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rd1_last_player = selected_player;
        }
    }
}

//------------------------------ LD2 --------------------------------------

document.getElementById("ld2");

ld2.addEventListener('change', update_ld2);

ld2_flag = false;
ld2_last_player = null;

function update_ld2() {
    var selected_player_key = ld2.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("ld2_player_age").textContent = "Age"
        document.getElementById("ld2_player_position").textContent = "Position";
        document.getElementById("ld2_player_handedness").textContent = "Handedness";
        document.getElementById("ld2_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("ld2_player_term").textContent = "Expiry (Term)";
        document.getElementById("ld2_player_clause").textContent = "Clause";

        if (ld2_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            ld2_flag = false;
        }

        if (ld2_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(ld2_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(ld2_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(ld2_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            ld2_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("ld2_player_age").textContent = "Age " + age;
        document.getElementById("ld2_player_position").textContent = position;
        document.getElementById("ld2_player_handedness").textContent = handed;
        document.getElementById("ld2_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("ld2_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("ld2_player_clause").textContent = clause;

        //---------------------------------------------------
        if (ld2_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            ld2_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (ld2_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            ld2_last_player = selected_player;
        }

        if (ld2_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(ld2_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(ld2_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(ld2_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            ld2_last_player = selected_player;
        }
    }
}

//------------------------------ RD2 --------------------------------------

document.getElementById("rd2");

rd2.addEventListener('change', update_rd2);

rd2_flag = false;
rd2_last_player = null;

function update_rd2() {
    var selected_player_key = rd2.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("rd2_player_age").textContent = "Age"
        document.getElementById("rd2_player_position").textContent = "Position";
        document.getElementById("rd2_player_handedness").textContent = "Handedness";
        document.getElementById("rd2_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("rd2_player_term").textContent = "Expiry (Term)";
        document.getElementById("rd2_player_clause").textContent = "Clause";

        if (rd2_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rd2_flag = false;
        }

        if (rd2_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(rd2_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(rd2_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(rd2_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rd2_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("rd2_player_age").textContent = "Age " + age;
        document.getElementById("rd2_player_position").textContent = position;
        document.getElementById("rd2_player_handedness").textContent = handed;
        document.getElementById("rd2_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("rd2_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("rd2_player_clause").textContent = clause;

        //---------------------------------------------------
        if (rd2_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rd2_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (rd2_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rd2_last_player = selected_player;
        }

        if (rd2_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(rd2_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(rd2_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(rd2_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rd2_last_player = selected_player;
        }
    }
}

//------------------------------ LD3 --------------------------------------

document.getElementById("ld3");

ld3.addEventListener('change', update_ld3);

ld3_flag = false;
ld3_last_player = null;

function update_ld3() {
    var selected_player_key = ld3.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("ld3_player_age").textContent = "Age"
        document.getElementById("ld3_player_position").textContent = "Position";
        document.getElementById("ld3_player_handedness").textContent = "Handedness";
        document.getElementById("ld3_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("ld3_player_term").textContent = "Expiry (Term)";
        document.getElementById("ld3_player_clause").textContent = "Clause";

        if (ld3_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            ld3_flag = false;
        }

        if (ld3_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(ld3_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(ld3_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(ld3_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            ld3_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("ld3_player_age").textContent = "Age " + age;
        document.getElementById("ld3_player_position").textContent = position;
        document.getElementById("ld3_player_handedness").textContent = handed;
        document.getElementById("ld3_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("ld3_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("ld3_player_clause").textContent = clause;

        //---------------------------------------------------
        if (ld3_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            ld3_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (ld3_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            ld3_last_player = selected_player;
        }

        if (ld3_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(ld3_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(ld3_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(ld3_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            ld3_last_player = selected_player;
        }
    }
}

//------------------------------ RD3 --------------------------------------

document.getElementById("rd3");

rd3.addEventListener('change', update_rd3);

rd3_flag = false;
rd3_last_player = null;

function update_rd3() {
    var selected_player_key = rd3.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("rd3_player_age").textContent = "Age"
        document.getElementById("rd3_player_position").textContent = "Position";
        document.getElementById("rd3_player_handedness").textContent = "Handedness";
        document.getElementById("rd3_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("rd3_player_term").textContent = "Expiry (Term)";
        document.getElementById("rd3_player_clause").textContent = "Clause";

        if (rd3_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rd3_flag = false;
        }

        if (rd3_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(rd3_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(rd3_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(rd3_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rd3_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("rd3_player_age").textContent = "Age " + age;
        document.getElementById("rd3_player_position").textContent = position;
        document.getElementById("rd3_player_handedness").textContent = handed;
        document.getElementById("rd3_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("rd3_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("rd3_player_clause").textContent = clause;

        //---------------------------------------------------
        if (rd3_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rd3_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (rd3_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rd3_last_player = selected_player;
        }

        if (rd3_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(rd3_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(rd3_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(rd3_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            rd3_last_player = selected_player;
        }
    }
}

//------------------------------ G1 --------------------------------------

document.getElementById("g1");

g1.addEventListener('change', update_g1);

g1_flag = false;
g1_last_player = null;

function update_g1() {
    var selected_player_key = g1.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("g1_player_age").textContent = "Age"
        document.getElementById("g1_player_position").textContent = "Position";
        document.getElementById("g1_player_handedness").textContent = "Handedness";
        document.getElementById("g1_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("g1_player_term").textContent = "Expiry (Term)";
        document.getElementById("g1_player_clause").textContent = "Clause";

        if (g1_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            g1_flag = false;
        }

        if (g1_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(g1_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(g1_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(g1_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            g1_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("g1_player_age").textContent = "Age " + age;
        document.getElementById("g1_player_position").textContent = position;
        document.getElementById("g1_player_handedness").textContent = handed;
        document.getElementById("g1_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("g1_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("g1_player_clause").textContent = clause;

        //---------------------------------------------------
        if (g1_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            g1_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (g1_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            g1_last_player = selected_player;
        }

        if (g1_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(g1_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(g1_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(g1_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            g1_last_player = selected_player;
        }
    }
}

//------------------------------ G2 --------------------------------------

document.getElementById("g2");

g2.addEventListener('change', update_g2);

g2_flag = false;
g2_last_player = null;

function update_g2() {
    var selected_player_key = g2.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("g2_player_age").textContent = "Age"
        document.getElementById("g2_player_position").textContent = "Position";
        document.getElementById("g2_player_handedness").textContent = "Handedness";
        document.getElementById("g2_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("g2_player_term").textContent = "Expiry (Term)";
        document.getElementById("g2_player_clause").textContent = "Clause";

        if (g2_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            g2_flag = false;
        }

        if (g2_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(g2_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(g2_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(g2_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            g2_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("g2_player_age").textContent = "Age " + age;
        document.getElementById("g2_player_position").textContent = position;
        document.getElementById("g2_player_handedness").textContent = handed;
        document.getElementById("g2_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("g2_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("g2_player_clause").textContent = clause;

        //---------------------------------------------------
        if (g2_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            g2_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (g2_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            g2_last_player = selected_player;
        }

        if (g2_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(g2_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(g2_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(g2_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            g2_last_player = selected_player;
        }
    }
}

//------------------------------ S1 --------------------------------------

document.getElementById("s1");

s1.addEventListener('change', update_s1);

s1_flag = false;
s1_last_player = null;

function update_s1() {
    var selected_player_key = s1.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("s1_player_age").textContent = "Age"
        document.getElementById("s1_player_position").textContent = "Position";
        document.getElementById("s1_player_handedness").textContent = "Handedness";
        document.getElementById("s1_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("s1_player_term").textContent = "Expiry (Term)";
        document.getElementById("s1_player_clause").textContent = "Clause";

        if (s1_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            s1_flag = false;
        }

        if (s1_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(s1_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(s1_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(s1_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            s1_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("s1_player_age").textContent = "Age " + age;
        document.getElementById("s1_player_position").textContent = position;
        document.getElementById("s1_player_handedness").textContent = handed;
        document.getElementById("s1_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("s1_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("s1_player_clause").textContent = clause;

        //---------------------------------------------------
        if (s1_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            s1_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (s1_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            s1_last_player = selected_player;
        }

        if (s1_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(s1_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(s1_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(s1_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            s1_last_player = selected_player;
        }
    }
}

//------------------------------ S2 --------------------------------------

document.getElementById("s2");

s2.addEventListener('change', update_s2);

s2_flag = false;
s2_last_player = null;

function update_s2() {
    var selected_player_key = s2.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("s2_player_age").textContent = "Age"
        document.getElementById("s2_player_position").textContent = "Position";
        document.getElementById("s2_player_handedness").textContent = "Handedness";
        document.getElementById("s2_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("s2_player_term").textContent = "Expiry (Term)";
        document.getElementById("s2_player_clause").textContent = "Clause";

        if (s2_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            s2_flag = false;
        }

        if (s2_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(s2_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(s2_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(s2_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            s2_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("s2_player_age").textContent = "Age " + age;
        document.getElementById("s2_player_position").textContent = position;
        document.getElementById("s2_player_handedness").textContent = handed;
        document.getElementById("s2_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("s2_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("s2_player_clause").textContent = clause;

        //---------------------------------------------------
        if (s2_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            s2_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (s2_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            s2_last_player = selected_player;
        }

        if (s2_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(s2_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(s2_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(s2_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            s2_last_player = selected_player;
        }
    }
}
//------------------------------ S3 --------------------------------------

document.getElementById("s3");

s3.addEventListener('change', update_s3);

s3_flag = false;
s3_last_player = null;

function update_s3() {
    var selected_player_key = s3.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {
        document.getElementById("s3_player_age").textContent = "Age"
        document.getElementById("s3_player_position").textContent = "Position";
        document.getElementById("s3_player_handedness").textContent = "Handedness";
        document.getElementById("s3_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("s3_player_term").textContent = "Expiry (Term)";
        document.getElementById("s3_player_clause").textContent = "Clause";

        if (s3_flag == true) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            s3_flag = false;
        }

        if (s3_last_player != null) {

            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(s3_last_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(s3_last_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(s3_last_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            s3_last_player = null;
        }

    } else {
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("s3_player_age").textContent = "Age " + age;
        document.getElementById("s3_player_position").textContent = position;
        document.getElementById("s3_player_handedness").textContent = handed;
        document.getElementById("s3_player_salary").textContent = "$" + salary + " ($" + bonus + ")";
        document.getElementById("s3_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("s3_player_clause").textContent = clause;

        //---------------------------------------------------
        if (s3_flag == false) {
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            s3_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (s3_last_player == null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            s3_last_player = selected_player;
        }

        if (s3_last_player != null) {
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(cap_hit) - Number(s3_last_player.get_salary()) + Number(selected_player.get_salary());
            document.getElementById("cap_hit").textContent = new_cap_hit;

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(bonuses) - Number(s3_last_player.get_bonus()) + Number(selected_player.get_bonus());
            document.getElementById("bonuses").textContent = new_bonuses;

            const cap_space = document.getElementById("cap_space").innerHTML;
            const new_cap_space = Number(cap_space) + Number(s3_last_player.get_salary()) - Number(selected_player.get_salary());
            document.getElementById("cap_space").textContent = new_cap_space;

            s3_last_player = selected_player;
        }
    }
}




//-------------------- Create Player -------------------------------------

function create_player() {

    // create player instance
    var create_name = document.getElementById("create_name").value;

    if (create_name == "") {
        create_name = "Unnamed Player";
    }

    var create_salary = document.getElementById("create_salary").value;
    var create_bonus = document.getElementById("create_bonus").value;
    var create_term = document.getElementById("create_term").value;
    var create_expiry = document.getElementById("create_expiry").value;
    var create_position = document.getElementById("create_position").value;
    var create_age = document.getElementById("create_age").value;
    var create_handed = document.getElementById("create_handed").value;
    var create_clause = document.getElementById("create_clause").value;



    var new_player = new Player(create_name, create_salary, create_bonus, create_term, create_expiry, create_position, create_age, create_handed, create_clause);

    player_list.push(new_player);

    console.log(new_player);
}

function create_player_2() {
    var create_name = document.getElementById("create_name").value;

    if (create_name == "") {
        create_name = "Unnamed Player";
    }

    var new_option_lw1 = document.createElement("option");
    new_option_lw1.text = create_name;
    new_option_lw1.value = create_name;
    document.getElementById("lw1").appendChild(new_option_lw1);

    var new_option_c1 = document.createElement("option");
    new_option_c1.text = create_name;
    new_option_c1.value = create_name;
    document.getElementById("c1").appendChild(new_option_c1);


    var new_option_rw1 = document.createElement("option");
    new_option_rw1.text = create_name;
    new_option_rw1.value = create_name;
    document.getElementById("rw1").appendChild(new_option_rw1);

    var new_option_lw2 = document.createElement("option");
    new_option_lw2.text = create_name;
    new_option_lw2.value = create_name;
    document.getElementById("lw2").appendChild(new_option_lw2);

    var new_option_c2 = document.createElement("option");
    new_option_c2.text = create_name;
    new_option_c2.value = create_name;
    document.getElementById("c2").appendChild(new_option_c2);

    var new_option_rw2 = document.createElement("option");
    new_option_rw2.text = create_name;
    new_option_rw2.value = create_name;
    document.getElementById("rw2").appendChild(new_option_rw2);

    var new_option_lw3 = document.createElement("option");
    new_option_lw3.text = create_name;
    new_option_lw3.value = create_name;
    document.getElementById("lw3").appendChild(new_option_lw3);

    var new_option_c3 = document.createElement("option");
    new_option_c3.text = create_name;
    new_option_c3.value = create_name;
    document.getElementById("c3").appendChild(new_option_c3);

    var new_option_rw3 = document.createElement("option");
    new_option_rw3.text = create_name;
    new_option_rw3.value = create_name;
    document.getElementById("rw3").appendChild(new_option_rw3);

    var new_option_lw4 = document.createElement("option");
    new_option_lw4.text = create_name;
    new_option_lw4.value = create_name;
    document.getElementById("lw4").appendChild(new_option_lw4);

    var new_option_c4 = document.createElement("option");
    new_option_c4.text = create_name;
    new_option_c4.value = create_name;
    document.getElementById("c4").appendChild(new_option_c4);

    var new_option_rw4 = document.createElement("option");
    new_option_rw4.text = create_name;
    new_option_rw4.value = create_name;
    document.getElementById("rw4").appendChild(new_option_rw4);

    var new_option_ld1 = document.createElement("option");
    new_option_ld1.text = create_name;
    new_option_ld1.value = create_name;
    document.getElementById("ld1").appendChild(new_option_ld1);

    var new_option_rd1 = document.createElement("option");
    new_option_rd1.text = create_name;
    new_option_rd1.value = create_name;
    document.getElementById("rd1").appendChild(new_option_rd1);

    var new_option_ld2 = document.createElement("option");
    new_option_ld2.text = create_name;
    new_option_ld2.value = create_name;
    document.getElementById("ld2").appendChild(new_option_ld2);

    var new_option_rd2 = document.createElement("option");
    new_option_rd2.text = create_name;
    new_option_rd2.value = create_name;
    document.getElementById("rd2").appendChild(new_option_rd2);

    var new_option_ld3 = document.createElement("option");
    new_option_ld3.text = create_name;
    new_option_ld3.value = create_name;
    document.getElementById("ld3").appendChild(new_option_ld3);

    var new_option_rd3 = document.createElement("option");
    new_option_rd3.text = create_name;
    new_option_rd3.value = create_name;
    document.getElementById("rd3").appendChild(new_option_rd3);

    var new_option_g1 = document.createElement("option");
    new_option_g1.text = create_name;
    new_option_g1.value = create_name;
    document.getElementById("g1").appendChild(new_option_g1);

    var new_option_g2 = document.createElement("option");
    new_option_g2.text = create_name;
    new_option_g2.value = create_name;
    document.getElementById("g2").appendChild(new_option_g2);

    var new_option_s1 = document.createElement("option");
    new_option_s1.text = create_name;
    new_option_s1.value = create_name;
    document.getElementById("s1").appendChild(new_option_s1);

    var new_option_s2 = document.createElement("option");
    new_option_s2.text = create_name;
    new_option_s2.value = create_name;
    document.getElementById("s2").appendChild(new_option_s2);

    var new_option_s3 = document.createElement("option");
    new_option_s3.text = create_name;
    new_option_s3.value = create_name;
    document.getElementById("s3").appendChild(new_option_s3);

}












