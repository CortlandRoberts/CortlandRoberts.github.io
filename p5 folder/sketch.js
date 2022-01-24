
let source_text = `Now is the winter of our discontent
Made glorious summer by this sun of York;
And all the clouds that lour'd upon our house
In the deep bosom of the ocean buried.
Now are our brows bound with victorious wreaths;
Our bruised arms hung up for monuments;
Our stern alarums changed to merry meetings,
Our dreadful marches to delightful measures.
Grim-visaged war hath smooth'd his wrinkled front;
And now, instead of mounting barded steeds
To fright the souls of fearful adversaries,
He capers nimbly in a lady's chamber
To the lascivious pleasing of a lute.
But I, that am not shaped for sportive tricks,
Nor made to court an amorous looking-glass;
I, that am rudely stamp'd, and want love's majesty
To strut before a wanton ambling nymph;
I, that am curtail'd of this fair proportion,`;
let search_word = 'Our';
let replace_word = "summer";
let altered_text;

function setup() {
  createCanvas(400, 400);
  altered_text = source_text.replaceAll(search_word, replace_word);
}

function draw() {
  background(220);
  textFont('Baskerville')
  textSize(20)
  let show_text;
  if(mouseIsPressed){
      show_text = altered_text;
                    
    } else{
      show_text = source_text;
    }
  text(show_text, 10, 10, 400, width*0.9)
}