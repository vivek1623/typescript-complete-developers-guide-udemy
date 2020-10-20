const profile = {
  name: "vivek",
  age: 29,
  coord: {
    lat: 16,
    long: 23,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name }: { age: number; name: string } = profile; // warning on name is fine
const {
  coord: { lat, long },
}: { coord: { lat: number; long: number } } = profile;
