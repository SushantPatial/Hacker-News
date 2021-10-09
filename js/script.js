function hover(element) 
{
  element.setAttribute('src', 'images/icons/hover/' + element.className + '.png');
};

function unhover(element) 
{
  element.setAttribute('src', 'images/icons/' + element.className + '.png');
};

$(".hide-button").click(function()
{
  $(this).closest(".content").fadeTo(500, 0.01, function() 
  { 
    $(this).slideUp(200, function()
    {
        $(this).remove(); 
    }); 
  });
})