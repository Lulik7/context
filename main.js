

const group = {
    title: "Java 10",
    students: ["Gena", "Andrey", "Elena", "Anton"],
    showList: function () {
        this.students.forEach((name) => {
            console.log(`${this.title}: ${name}`);
        });
    },
};

group.showList();


//----------------------1------------------//
const group1 = {
    title: "Java 10",
    students: ["Gena", "Andrey", "Elena", "Anton"],
    showList: function () {
        for (const name of this.students) {
            console.log(`${this.title}: ${name}`);
        }
    },
};

group1.showList();

//----------------------2------------------//

const group2 = {
    title: "Java 10",
    students: ["Gena", "Andrey", "Elena", "Anton"],
    showList: function () {
        for (let i = 0; i < this.students.length; i++) {
            const name = this.students[i];
            console.log(`${this.title}: ${name}`);
        }
    },
};

group2.showList();

//---------------------3------------------//

const group3 = {
    title: "Java 10",
    students: ["Gena", "Andrey", "Elena", "Anton"],
    showList: function () {
        const studentListString = this.students.map((name) => {
            return `${this.title}: ${name}`;
        }).join('\n');
        console.log(studentListString);
    },
};

group3.showList();


//------------------4------------------//
const group4 = {
    title: "Java 10",
    students: ["Gena", "Andrey", "Elena", "Anton"],
    showList: function () {
        for (const [index, name] of this.students.entries()) {
            console.log(`${this.title} (Student #${index + 1}): ${name}`);
        }
    },
};

group4.showList();
