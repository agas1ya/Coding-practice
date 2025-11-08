export class GradeSchool {
  private database: Record<number, string[]> = {}

sort() {
  // Make a copy of the database first
  const copy: Record<number, string[]> = {};

  for (const grade in this.database) {
    copy[Number(grade)] = [...this.database[grade]].sort(); // copy and sort each array
  }

  // Sort the keys numerically
  return Object.fromEntries(
    Object.entries(copy).sort(([gradeA], [gradeB]) => Number(gradeA) - Number(gradeB))
  ) as Record<number, string[]>
}

  roster() {
    return this.sort()
  }

  add(name: string, grade: number) {
    const oldGradeArr = Object.values(this.database).find(arr => arr.includes(name))
    if (oldGradeArr) {
      oldGradeArr.splice(oldGradeArr.indexOf(name), 1)     
    }

    if (this.database[grade]) {
      this.database[grade].push(name);
    } else {
      this.database[grade] = [name];
    }

  }

  grade(grade: number) {
    const database = this.sort()
    return database[grade] === undefined ? [] : database[grade]
  }

}
