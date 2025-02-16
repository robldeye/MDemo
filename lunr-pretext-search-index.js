var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-limits",
  "level": "1",
  "url": "sec-limits.html",
  "type": "Section",
  "number": "1.1",
  "title": "Limits",
  "body": " Limits  What does it mean to say that the value of a function approaches a specific quantity? As changes, so too does the value of a given function . We would like to use the notation to mean that the function values get closer to some -value as a consequence of getting closer to some -value .  A real-valued function can only approach from two sides, and these are captured by how approaches from the left and right. Let's see a prototypical example of what happens when everything goes right.  Good Example Consider the function . Let's watch in the manimation below what happens when from both sides. We see that as from either side. This verifies that as , or .  Now let's think about how this limiting process could fail. We can create such an example by forcing a break in the graph of a function - piecewise-defined functions are great for this. To make sense of which side we approach the break from, we can use notation and to denote approaching from the left or right side, respectively.  Bad Example Consider the function Let's watch in the manimation below what happens when from both sides. Here we see that approaches as approaches from the left, and that approaches as approaches from the right. In other words, . The function does not approach the same -value as , and so we say that the limit does not exist.  "
},
{
  "id": "sec-limits-4",
  "level": "2",
  "url": "sec-limits.html#sec-limits-4",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "Good Example.",
  "body": "Good Example Consider the function . Let's watch in the manimation below what happens when from both sides. We see that as from either side. This verifies that as , or . "
},
{
  "id": "sec-limits-6",
  "level": "2",
  "url": "sec-limits.html#sec-limits-6",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "Bad Example.",
  "body": "Bad Example Consider the function Let's watch in the manimation below what happens when from both sides. Here we see that approaches as approaches from the left, and that approaches as approaches from the right. In other words, . The function does not approach the same -value as , and so we say that the limit does not exist. "
},
{
  "id": "sec-lincomb",
  "level": "1",
  "url": "sec-lincomb.html",
  "type": "Section",
  "number": "2.1",
  "title": "Linear Combinations",
  "body": " Linear Combinations  We have previously seen that the solution set to a linear system can take on different forms: a single point, a line, a plane, etc. In the case of a line , we saw that we can take a vector that lies on , and reach any other vector that lies on by scaling by a constant. In the case of a plane, we can use two vectors that don't lie on a common line (more on this later) and use their multiples to sweep out the plane.    Now we introduce notation that captures this idea a little more formally.    Suppose that is a collection of vectors in . The \"span\" of is a new collection of all possible linear combinations of the vectors in :     For example, the following manimation shows that the span of a single non-zero vector is a line. Caution: Scaling the zero vector leaves it unchanged, and so . Outside of this example, the span of a finite collection of vectors always contains an infinite amount of vectors.   "
},
{
  "id": "def-span",
  "level": "2",
  "url": "sec-lincomb.html#def-span",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  Suppose that is a collection of vectors in . The \"span\" of is a new collection of all possible linear combinations of the vectors in :    "
},
{
  "id": "sec-lintran",
  "level": "1",
  "url": "sec-lintran.html",
  "type": "Section",
  "number": "2.2",
  "title": "Linear Transformations",
  "body": " Linear Transformations  Most of our focus on the matrix equation has been devoted to fixing some vector and then finding all solution vectors . Recalling consistency, let's think about which admit solutions to the matrix equation. It will be helpful to think of a matrix as a function: that takes in vectors and outputs a new vector . Suppose , so that the input and output vectors all lie in the same space.  We can visualize the effect of this matrix function on vectors in the plane in the following two examples.  Protypical Example Suppose . Watch what happens to the coordinate axes : We see that takes the plane with standard coordinate axes and contorts it into a kind of 'sheared' plane.  What can go wrong? Suppose . Watch what happens to the coordinate axes : Notice that . Applying this matrix to the vectors of the plane effectively 'collapses' the plane to a line. Even though we are not yet equipped with the formal definition of 'dimension', our intuition tells us that it must encode that a plane is 2-dimensional and a line is 1-dimensional.  The only difference between the two exercises above lied in the ( )-matrices that we used. How do their RREF compare?  Let's increase dimension a little by considering the effect of a ( )-matrix acting on .  Higher dimensions Suppose . Watch what happens to the coordinate axes : Once again, we have . This time, acts on three-space by collapsing everything to a line.  "
},
{
  "id": "sec-lintran-4",
  "level": "2",
  "url": "sec-lintran.html#sec-lintran-4",
  "type": "Checkpoint",
  "number": "2.2.1",
  "title": "Protypical Example.",
  "body": "Protypical Example Suppose . Watch what happens to the coordinate axes : We see that takes the plane with standard coordinate axes and contorts it into a kind of 'sheared' plane. "
},
{
  "id": "sec-lintran-5",
  "level": "2",
  "url": "sec-lintran.html#sec-lintran-5",
  "type": "Checkpoint",
  "number": "2.2.2",
  "title": "What can go wrong?",
  "body": "What can go wrong? Suppose . Watch what happens to the coordinate axes : Notice that . Applying this matrix to the vectors of the plane effectively 'collapses' the plane to a line. Even though we are not yet equipped with the formal definition of 'dimension', our intuition tells us that it must encode that a plane is 2-dimensional and a line is 1-dimensional. "
},
{
  "id": "sec-lintran-8",
  "level": "2",
  "url": "sec-lintran.html#sec-lintran-8",
  "type": "Checkpoint",
  "number": "2.2.3",
  "title": "Higher dimensions.",
  "body": "Higher dimensions Suppose . Watch what happens to the coordinate axes : Once again, we have . This time, acts on three-space by collapsing everything to a line. "
},
{
  "id": "examples",
  "level": "1",
  "url": "examples.html",
  "type": "Section",
  "number": "3.1",
  "title": "Example Gallery",
  "body": " Example Gallery  Below are a collection of manimations that have yet to find a home.           "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
