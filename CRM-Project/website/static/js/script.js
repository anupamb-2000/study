// Sidebar Trigger
document.addEventListener("DOMContentLoaded", function () {
    const options = {
        "edge": "left"
    }

    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, options);
});

function clearFilters() {
    document.getElementsByName("checkbox").forEach(element => {
        element.checked = false;
    });
}

// Materialize Select
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

// Delete Category
function deleteCategory(categoryId){
    fetch('/categories/' + categoryId, {
        method: 'DELETE'
    })
    .then(() => window.location.href="/categories");
}

// Search Category
function searchCategory(){
    searchBy = document.getElementById('searchBy').value
    searchConstraint = document.getElementById('searchConstraint').value
    fetch('/categories/' + searchBy + '/' + searchConstraint, {
        method: 'GET'
    })
    .then(() => window.location.href="/categories/" + searchBy + '/' + searchConstraint);
}

// Back to categories
function categoryBack(){
    window.location.href="/categories"
}

// Delete Batch
function deleteBatch(batchId){
    fetch('/batches/' + batchId, {
        method: 'DELETE'
    })
    .then(() => window.location.href="/batches");
}

// Search Batch
function searchBatch(date){
    if (date != 'date'){
        searchBy = document.getElementById('searchBy').value
        searchConstraint = document.getElementById('searchConstraint').value
    }
    else{
        searchBy = 'date'
        searchConstraint = document.getElementById('branchStartDateSearch').value
    }
    alert(searchConstraint)
    fetch('/batches/' + searchBy + '/' + searchConstraint, {
        method: 'GET'
    })
    .then(() => window.location.href="/batches/" + searchBy + '/' + searchConstraint);
}

// Back to batches
function batchBack(){
    window.location.href="/batches"
}

// Get date picked
function getDate(){
    console.log(document.getElementById('batchStartDate').value)
}
    