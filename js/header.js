HEADER.appendChild(NAVBAR);
NAVBAR.appendChild(MENULIST);
modeButton = document.createElement("button");
HEADER.append(modeButton);
i=0;
while (i<LIMIT){
	const LISTITEM = document.createElement("li");
	const MENULINK = document.createElement("a");
	navlink = "./" + TESTTABLE[i] + ".html"; 
	MENULIST.appendChild(LISTITEM);
	LISTITEM.appendChild(MENULINK);
	MENULINK.setAttribute("href", navlink);
	MENULINK.innerHTML = TESTTABLE[i];
	i++;
}
