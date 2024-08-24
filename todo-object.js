import { addDays } from "date-fns";

export class TODO {
  constructor(
    title = "Default Title",
    description = "Default Description",
    dueDate = addDays(new Date(), 1),
    priority = false,
    notes = "Default Notes",
    complete = false
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.complete = complete;
  }
}
