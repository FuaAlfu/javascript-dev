type Person = {
    readonly name: string;
    age: number;
    address?: string;
    speak1: (content: string) => void;
    speak2(content: string): void;
  };
  
  const record: Person = {
    name: 'john',
    age: 29,
    address: 'XXX.XXX',
    speak1: (content: string) => console.log(content),
    speak2(content: string) {
      console.log(content);
    },
  };
  
  console.log(record);
  console.log(record.speak1(`My name is ${record.name}`));
  console.log(record.speak2(`I am ${record.age} years old`));