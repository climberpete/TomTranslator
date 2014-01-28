var dict = getDictionary();

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

function handleText(textNode){
	var v = textNode.nodeValue;
	for(var i = 0; i < dict.length; i++){
		v = v.replace(dict[i].regexp, function(match, p1, p2, p3, offset, string) {
			var replacementText = dict[i].replacement;
			if(p1.length > 0 && p1 === p1.toUpperCase()){
				replacementText = replacementText.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1);});
			}
			if(p3.length > 0){
				replacementText += dict[i].plural;
			}
			else{
				if(!(typeof dict[i].singular === 'undefined')){
					replacementText += dict[i].singular
				}
			}
			return replacementText;
		});
		textNode.nodeValue = v;
	}
}

function wordPair(regexp, replacement, plural, singular){
	this.regexp=regexp;
	this.replacement=replacement;
	this.plural=plural;
	this.singular=singular
}

function getDictionary(){
	var dictionary = new Array();
	dictionary.push(new wordPair(/\b(F|f)ork(|)(s|)\b/g, "food rake", "s"));
	dictionary.push(new wordPair(/\b(T|t)ortilla(|)(s|)\b/g, "bean blankie", "s"));
	dictionary.push(new wordPair(/\b(R|r)oot (B|b)eer(s|)\b/g, "super water", "s"));
	dictionary.push(new wordPair(/\b(E|e)gg(|)(s|)\b/g, "pre bird", "s"));
	dictionary.push(new wordPair(/\b(C|c)hicken (C|c)acciatore(s|)\b/g, "chicky catch", "s"));
	dictionary.push(new wordPair(/\b(F|f)ried (C|c)hicken(s|)\b/g, "fri fri chicky chick", "s"));
	dictionary.push(new wordPair(/\b(C|c)hicken (P|p)armesean(s|)\b/g, "chicky chicky parm parm", "s"));
	dictionary.push(new wordPair(/\b(C|c)hicken (P|p)arm(s|)\b/g, "chicky chicky parm parm", "s"));
	dictionary.push(new wordPair(/\b(N|n)oodle(|)(s|)\b/g, "long ass rice", "s"));
	dictionary.push(new wordPair(/\b(C|c)ake(|)(s|)\b/g, "big ol' cookie", "s"));
	dictionary.push(new wordPair(/\b(A|a)ir (C|c)onditioner(s|)\b/g, "cool blaster", "z"));
	dictionary.push(new wordPair(/\b(S|s)andwich(|)(es|)\b/g, "sammie", "s"));
	dictionary.push(new wordPair(/\b(E|e)ntree(|)(s|)\b/g, "tray tra", "ies", "y"));
	dictionary.push(new wordPair(/\b(D|d)essert(|)(s|)\b/g, "ssert", "s"));
	dictionary.push(new wordPair(/\b(R|r)asin(|)(s|)\b/g, "old-ass grape", "s"));
	dictionary.push(new wordPair(/\b(S|s)oft (S|s)erve(s|)\b/g, "vanilla ice", "s"));
	dictionary.push(new wordPair(/\b(L|l)emonade(|)(s|)\b/g, "LL cool ade", "s"));
	dictionary.push(new wordPair(/\b(S|s)oft (S|s)erve(s|)\b/g, "vanilla ice", "s"));
	dictionary.push(new wordPair(/\b(S|s)oft-(S|s)erve(s|)\b/g, "vanilla ice", "s"));
	dictionary.push(new wordPair(/\b(N|n)utella(|)(s|)\b/g, "bust a nut", "s"));
	dictionary.push(new wordPair(/\b(S|s)oft (S|s)erve(s|)\b/g, "vanilla ice", "s"));
	dictionary.push(new wordPair(/\b(L|l)sagna(|)(s|)\b/g, "lazy gaga", "s"));
	dictionary.push(new wordPair(/\b(P|p)ork(|)(s|)\b/g, "notorious P.I.G.", "s"));
	dictionary.push(new wordPair(/\b(|)40s(|)(|)\b/g, "Malt Whitmans"));
	dictionary.push(new wordPair(/\b(M|m)ilk(|)(s|)\b/g, "cereal sauce", "s"));
	dictionary.push(new wordPair(/\b(P|p)ork (C|c)hop(s|)\b/g, "oink steak", "s"));
	dictionary.push(new wordPair(/\b(G|g)uacamole(|)(s|)\b/g, "guaca guaca flame", "s"));
	dictionary.push(new wordPair(/\b(B|b)eer(|)(s|)\b/g, "punky brewster", "s"));
	dictionary.push(new wordPair(/\b(F|f)rozen (Y|y)ogurt(s|)\b/g, "fro yo ma", "s"));
	dictionary.push(new wordPair(/\b(T|t)ea(|)(s|)\b/g, "tea pain", "s"));
	dictionary.push(new wordPair(/\b(C|c)elery(|)(|)\b/g, "celery swank", "s"));
	dictionary.push(new wordPair(/\b(D|d)umpling(|)(s|)\b/g, "lil' surprises", "s"));
	dictionary.push(new wordPair(/\b(K|k)etchup(|)(s|)\b/g, "kanye blood", "s"));
	dictionary.push(new wordPair(/\b(A|a)pple(|)(s|)\b/g, "teacher cand", "ies", "y"));
	dictionary.push(new wordPair(/\b(C|c)ocktail (W|w)einer(s|)\b/g, "lil' bow wow", "s"));
	dictionary.push(new wordPair(/\b(W|w)ater(|)(s|)\b/g, "hot ice", "s"));
	dictionary.push(new wordPair(/\b(G|g)um(|)(s|)\b/g, "chew chew train", "s"));
	dictionary.push(new wordPair(/\b(B|b)oxers(|)(|)\b/g, "muhammad alis"));
	dictionary.push(new wordPair(/\b(P|p)ork (R|r)ind(s|)\b/g, "busta rind", "s"));
	dictionary.push(new wordPair(/\b(I|i)ce (C|c)ream(|)\b/g, "milk on the rocks"));
		
	return dictionary;
}