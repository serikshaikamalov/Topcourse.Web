import get from "helpers/get";

const user = { work: { id: 1 }, name: "Serik" };

it("Returns 1 from the object with key path: work.id", () => {
  expect(get(user, "work.id")).toBe(1);
});

it("Returns {id: 1} from the object with key path: work", () => {
  expect(get(user, "work")).toEqual({ id: 1 });
});

it("Returns undefined from the object with key path: work.id.name", () => {
  expect(get(user, "work.id.name")).toBe(undefined);
});

it("Returns Serik from the object with key path: name", () => {
  expect(get(user, "name")).toBe("Serik");
});
