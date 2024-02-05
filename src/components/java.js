import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import "../css/java.css"
export default function Java() {
    var primitiveDataTypes = `
          boolean b = true;
          byte bt = 127;
          char c = 'a';
          short s = 32767;
          int i = 2147483647;
          long l = 9223372036854775807L;
          float f = 3.14159f;
          double d = 3.141592653589793;
        `
        var nonPrimitiveTypes = [{
            type: 'String',code: `
            String str = "Hello, World!";
            int length = str.length(); // Returns 13
            char firstChar = str.charAt(0); // Returns 'H'
            String substring1 = str.substring(7); // Returns "World!"
            String substring2 = str.substring(0, 5); // Returns "Hello"
            String upperCase = str.toUpperCase(); // Returns "HELLO, WORLD!"
            String lowerCase = str.toLowerCase(); // Returns "hello, world!"
            boolean startsWithHello = str.startsWith("Hello"); // Returns true
            boolean endsWithWorld = str.endsWith("World!"); // Returns true
            int indexOfWorld = str.indexOf("World"); // Returns 7
            int lastIndexOfl = str.lastIndexOf("l"); // Returns 10

            String str1 = "hello";
            String str2 = "HELLO";
            boolean isEqual = str1.equals(str2); // Returns false
            int compareResult = str1.compareTo(str2); // Returns a value < 0 (case-sensitive)
    `},
    {type: 'Array',code: `
            int[] numbers = new int[5]; // Array of integers with size 5
            int[] primes = {2, 3, 5, 7, 11}; // Array of prime numbers;
            int arrayLength = primes.length; // Returns 5
            Arrays.sort(numbers); // Numbers sorted in ascending order
            int index = Arrays.binarySearch(numbers, 3); // Returns index 2
            String arrayString = Arrays.toString(numbers); // Returns "[1, 2, 3, 4, 5]"

    `},
    {type: 'ArrayList',code: `
    ArrayList<String> names = new ArrayList<>();
    names.add("Alice");
    names.add("Bob");
    names.add(1, "Charlie"); // Insert "Charlie" at index 1
    String name = names.get(1); // Returns "Charlie"
    names.set(1, "David"); // Replaces element at index 1 with "David"
    names.remove("David"); // Removes "David" from the ArrayList
    names.remove(0); // Removes the element at index 0
    int size = names.size(); // Returns the number of elements in the ArrayList
    boolean isEmpty = names.isEmpty(); // Returns true if the ArrayList is empty

    Iterator<String> iterator = names.iterator();
    while (iterator.hasNext()) {
        String name = iterator.next();
    }
    for (String name : names) {
        // System.out.println(name);
    }
    `},
    {type: 'HashMap',code: `
    HashMap<String, Integer> ages = new HashMap<>();
    ages.put("Alice", 25);
    ages.put("Bob", 30);
    int aliceAge = ages.get("Alice"); // Returns 25
    ages.remove("Bob"); // Removes the entry for Bob
    ages.clear(); // Removes all entries from the HashMap
    boolean containsAlice = ages.containsKey("Alice"); // Returns true
    boolean containsAge30 = ages.containsValue(30); // Returns false
    for (Map.Entry<String, Integer> entry : ages.entrySet()) {
        String name = entry.getKey();
        int age = entry.getValue();
        // Process the entry
    }
    for (Map.Entry<String, Integer> entry : ages.entrySet()) {
        String name = entry.getKey();
        int age = entry.getValue();
        // Process the entry
    }
    for (int age : ages.values()) {
        // Process the value
    }
    `},
    {type: 'Set',code:  `
        Set<String> uniqueNames = new HashSet<>();
        uniqueNames.add("Alice");
        uniqueNames.add("Bob");
        uniqueNames.remove("Alice");
        uniqueNames.clear(); 
        int size = uniqueNames.size();
    `
    },
    {type: 'Thread',code:  `
        Set<String> uniqueNames = new HashSet<>();
        uniqueNames.add("Alice");
        uniqueNames.add("Bob");
        uniqueNames.remove("Alice");
        uniqueNames.clear(); 
        int size = uniqueNames.size();
    `
    },
    ]
    return (
        <div>
            <div className="java">
                <h1>
                    Data Types
                </h1>
                {nonPrimitiveTypes.map((item=> <div className='datatype'>
                    <h2>
                        {item.type}
                    </h2>
                    <SyntaxHighlighter className="code" language="java">
                    {item.code}
                </SyntaxHighlighter>
                </div>))}
            </div>

        </div>
    )
}