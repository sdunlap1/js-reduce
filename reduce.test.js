describe("#extractValue", function () {
  var arr = [
    { name: "Elie" },
    { name: "Colt" },
    { name: "Tim" },
    { name: "Matt" },
  ];
  it("should make a new array with the value pair of each object", function () {
    expect(extractValue(arr, "name")).toEqual(["Elie", "Colt", "Tim", "Matt"]);
  });
});

describe("#vowelCount", function () {
  it("should return the total number of each vowel", function () {
    expect(vowelCount("Elie")).toEqual({ e: 2, i: 1 });
    expect(vowelCount("Tim")).toEqual({ i: 1 });
    expect(vowelCount("Matt")).toEqual({ a: 1 });
    expect(vowelCount("Colt")).toEqual({ o: 1 });
    expect(vowelCount("mmmmmfffff")).toEqual({});
    expect(
      vowelCount("Unique zebras quickly gallop over my fancy jade box.")
    ).toEqual({ a: 4, e: 4, i: 2, o: 3, u: 3 });
  });
});

describe("#addKeyAndValue", function () {
  var array = [
    { name: "Elie" },
    { name: "Tim" },
    { name: "Matt" },
    { name: "Colt" },
  ];
  var newKeyValuePair = [
    { title: "Instructor", name: "Elie" },
    { title: "Instructor", name: "Tim" },
    { title: "Instructor", name: "Matt" },
    { title: "Instructor", name: "Colt" },
  ];
  it("should add a new key value pair to the array", function () {
    expect(addKeyAndValue(arr, "title", "Instructor")).toEqual(newKeyValuePair);
  });
});

describe("#partition", function() {
  function isEven(val) {
    return val % 2 === 0;
  }
  function isLongerThanThreeCharacters(val) {
    return val.length > 3;
  }
  var arr = [1, 2, 3, 4, 5, 6, 7, 8];
  var names = ["Elie", "Colt", "Tim", "Matt"];
  it("returns an array of arrays with the first subarray as values returning true from the callback", function() {
    expect(partition(arr, isEven)).toEqual([[2, 4, 6, 8], [1, 3, 5, 7]]);
    expect(partition(names, isLongerThanThreeCharacters)).toEqual([
      ["Elie", "Colt", "Matt"],
      ["Tim"]
    ]);
  });
});
