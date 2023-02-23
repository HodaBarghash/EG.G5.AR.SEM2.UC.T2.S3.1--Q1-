function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5mwRDRlJJAB":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbw6X9JJUret0SKueZlaOIny9UhyhaaAEZqlp-Kphok9dTPH3EQye3BasxOZhP0jrcz0/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

