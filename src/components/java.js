
export default function Java(){
    var list = `List<String> list = new ArrayList<>()</>`
    return (
        <div>
            <div className="header">
                <h2>Data types</h2>
                <ul>
                    <li>
                    <h3>Primitive data types</h3>
                    <ul>
                        <li>
                            Boolean
                            <br/>
                            <code>
                                Boolean bool  = false;
                            </code>
                        </li>
                        <li>
                            Int 
                            <br/>
                            <code>
                                int x = 1;
                            </code>
                        </li>
                        <li>
                            Float 
                            <br/>
                            <code>
                             float f1 = 234.5f  
                            </code>
                        </li>
                        <li>
                            Double 
                            <br/>
                            <code>
                            double d1 = 12.3
                            </code>
                        </li>
                        <li>
                            Char 
                            <br/>
                            <code>
                            char c = 'c';
                            </code>
                        </li>
                    </ul>
                    </li>
                    <li>
                        <h3>Non Primitive Data Types</h3>
                        <ul>
                          <li>
                                Array
                                <br/>
                                <code>
                                    type[] name = new type[size];
                                    int[] arr = new int[5];
                                    <br/>
                                    int[] arr = {1, 2, 3, 4, 5};

                                </code>
                            </li>
                            <li>
                                List
                                
                            </li>
                        </ul>
                        
                    </li>
                </ul>

                <p>

                </p>
                </div>
        </div>
    )
}