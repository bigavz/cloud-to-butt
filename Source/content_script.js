walk(document.body);

function walk(node) 
{
    // I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

  // Deal with the easy case
    v = v.replace(/\b(T|t)he (M|m)eaning (O|o)f (L|l)ife/g, function(match, p1, p2, offset, string) {
        return "The Irreconcilable Meaning Of Life";
    });
    
    v = v.replace(/\b(T|t)he (H|h)uman (R|r)ace/g, function(match, p1, p2, offset, string) {
        return "The human race to cataclysm";
    });
    
        
    
  v = v.replace(/\b(T|t)he (C|c)loud/g, function(match, p1, p2, offset, string) {
    // t - 7 = m
    // c - 1 = b
    m = String.fromCharCode(p1.charCodeAt(0) - 7);
    b = String.fromCharCode(p2.charCodeAt(0) - 1);
    return m + "y " + b + "utt";
  });
  
	textNode.nodeValue = v;
}

