// Loads external library
load("prototype.js");

print("=========================");
print("   JSC PROTOTYPE TEST    ");
print("=========================");

var newline = function(){
  print("");
};

print("You passed", arguments.length, "arguments:");
$A(arguments).each(function(argument){
  print("- " + argument);
});

// Iterate words
newline();
var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
$w(lorem).each(function(word, index){
  print("Index:", index, "Word:", word);
});

// Output an object
newline();
var four = "IV";
var object = {
  complex: {property: "one"}, 
  list: [2, "3", four]
};
print("JSON:", Object.toJSON(object));

// Output param string
newline();
print("QueryString:", Object.toQueryString({
  query: "XYZ", 
  count: 23, 
  page: 1
}));

// Analyse some input.
newline();
print("Enter some text:");
var line = readline();
print("> Text length: ", line.length);