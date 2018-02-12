const projects = document.querySelectorAll('.project-container');
const projectTags = [];
let tags = [];

function collectTags() {
  projects.forEach(project => {
    const projectTags = project.dataset.tags.split(',');
    console.log('Dataset Tags:', projectTags);

    let result = tags.filter(function(n) {
        return projectTags.indexOf(n) !== -1;
    });

    console.log('Result', result);
  });
}




console.log(projects);

function showProject() {
  console.log('Clicked!');
}

function handleClick(e) {
  const tag = this.innerText;
  console.log('tag: ', tag)
  // Toggle active class on badges
  this.classList.toggle('active');

  // Hide all ?

  // Create array of all active buttons
  var index = tags.indexOf(tag);
  this.classList.contains('active') ? tags.push(tag) : tags.splice(index, 1);

  console.log('tags: ', tags);

  // Show if the data-attribute matches
  collectTags();
  console.log('projectTags', projectTags);

}

const filterTags = document.querySelectorAll('.filter .badge');
console.log('Filter Tags: ', filterTags);
filterTags.forEach(tag => tag.addEventListener('click', handleClick));
