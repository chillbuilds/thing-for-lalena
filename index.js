var arr = []

function openWindows() {
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            if(arr[i][j] != ''){
                window.open(`https://vendor.denydesigns.com/purchase_orders?utf8=%E2%9C%93&filters%5Bsearch%5D=${arr[i][j]}&filters%5Bsearch_attribute%5D=&filters%5Bvendor_id%5D=&filters%5Bcustomer_no%5D=&filters%5Bsales_rep%5D=&filters%5Bstart_date%5D=&filters%5Bend_date%5D=&filters%5Bstatus_filter%5D%5B%5D=&commit=Search`, '_blank')
                // window.open(`https://vendor.denydesigns.com/purchase_orders/${arr[i][j]}`, '_blank')
            }
        }
    }
}

$(document).keypress(function(event){
    if(event.which == 13){
        arr = []
        arr.push($('#space').val().split(' '))
        arr.push($('#line-break').val().split(' '))
        arr.push($('#comma').val().split(' '))
        openWindows()
    }
  })