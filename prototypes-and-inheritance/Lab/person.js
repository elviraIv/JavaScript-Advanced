class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = this.firstName + " " + this.fullName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    if (firstName && lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
}

