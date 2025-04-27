const categoriesElem = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesElem.length}`);

categoriesElem.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const quantity = item.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${quantity}`);
});
