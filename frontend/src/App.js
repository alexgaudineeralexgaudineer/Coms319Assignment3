
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";

function App() {
  const [viewer, setViewer] = useState(1);

  function changeViewStudents() {
    let myNavItem = "navitem-" + viewer;
    document.getElementById(myNavItem).classList.remove("active");
    setViewer(1);
    document.getElementById("navitem-1").classList.add("active");
  }

  function changeViewCreate() {
    let myNavItem = "navitem-" + viewer;
    document.getElementById(myNavItem).classList.remove("active");
    setViewer(2);
    document.getElementById("navitem-2").classList.add("active");
  }

  function changeViewRead() {
    let myNavItem = "navitem-" + viewer;
    document.getElementById(myNavItem).classList.remove("active");
    setViewer(3);
    document.getElementById("navitem-3").classList.add("active");
  }

  function changeViewUpdate() {
    let myNavItem = "navitem-" + viewer;
    document.getElementById(myNavItem).classList.remove("active");
    setViewer(4);
    document.getElementById("navitem-4").classList.add("active");
  }

  function changeViewDelete() {
    let myNavItem = "navitem-" + viewer;
    document.getElementById(myNavItem).classList.remove("active");
    setViewer(5);
    document.getElementById("navitem-5").classList.add("active");
  }

  function StudentView() {
    const teacherImageAlpaca =
      "https://www.cs.iastate.edu/files/styles/people_thumb/public/people/profilepictures/1517665937421.jpg?itok=15jJS_fr";

    return (
      <div className="student-view p-5" style={{ backgroundColor: "#2F4F4F" }}>
        <div className="container-fluid py-5 bg-dark text-white rounded shadow-lg">
          <h1 className="display-4 text-center text-info">SE/COMS 319</h1>
          <p className="fs-4 text-center text-light">
            SE/COMS 319 teaches website programming and creation at Iowa State University.
          </p>
        </div>

        <div className="container-fluid p-4 rounded-lg" style={{ backgroundColor: "#778899" }}>
          <h2 className="text-center text-warning">Professor</h2>
          <div className="d-flex justify-content-center">
            <div className="card bg-light text-dark p-3 rounded-lg shadow-lg" style={{ border: "2px solid #FFD700" }}>
              <h3 className="text-center">Professor Aldaco</h3>
              <img
                className="rounded-circle"
                src={teacherImageAlpaca}
                alt="Professor Alpaca"
                style={{ width: "120px", border: "3px solid #FFD700" }}
              />
            </div>
          </div>
        </div>

        <div className="container-fluid p-4 rounded-lg mt-4 shadow-lg" style={{ backgroundColor: "#708090" }}>
          <h2 className="text-center text-light">Students</h2>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="card bg-light text-dark p-3 rounded-lg shadow-lg" style={{ border: "2px solid #00FA9A" }}>
                <h3 className="text-center">Niraj Amin</h3>
                <p className="text-center fs-6">
                  An extremely skilled computer scientist specializing in big data.
                </p>
                <p className="text-center fs-6">
                  Email: namin@iastate.edu
                  <br />
                  Junior, loves cats and video games.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="card bg-light text-dark p-3 rounded-lg shadow-lg" style={{ border: "2px solid #00FA9A" }}>
                <h3 className="text-center">Alex Gaudineer</h3>
                <p className="text-center fs-6">
                  A software engineer who aspires to be a Project Manager post-grad.
                </p>
                <p className="text-center fs-6">
                  Email: alexgaud@iastate.edu
                  <br />
                  Junior, loves everything about engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-primary text-white p-4 rounded-lg mt-4 shadow-lg">
          <h2 className="text-center">Date: 4/27/24</h2>
          <p className="fs-4 text-center">
            This project involves creating an API for a MERN stack website. It includes MongoDB, Express, React, and NodeJS.
          </p>
        </div>
      </div>
    );
  }



  const CreateView = () => {
    const [formData, setFormData] = useState({
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rate: 0,
      count: 0,
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      console.log(e)

      fetch('http://localhost:8081/addProduct', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "id": e.target[0].value,
          "title": e.target[1].value,
          "price": e.target[2].value,
          "description": e.target[3].value,
          "category": e.target[4].value,
          "image": e.target[5].value,
          "rating":
          {
            "rate": e.target[6].value,
            "count": e.target[7].value
          }
        })
      })
    };

    return (
      <div className="container">
        <h1>Add New Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="id"
              className="form-label"
            >
              Product ID
            </label>
            <input
              type="number"
              className="form-control"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="title"
              className="form-label"
            >
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="price"
              className="form-label"
            >
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              required
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="description"
              className="form-label"
            >
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              required
              value={
                formData.description
              }
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label
              htmlFor="category"
              className="form-label"
            >
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              required
              value={
                formData.category
              }
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="image"
              className="form-label"
            >
              Image URL
            </label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              required
              value={formData.image}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="rate"
              className="form-label"
            >
              Rating Rate
            </label>
            <input
              type="number"
              className="form-control"
              id="rate"
              name="rate"
              required
              min="0"
              max="5"
              value={formData.rate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="count"
              className="form-label"
            >
              Rating Count
            </label>
            <input
              type="number"
              className="form-control"
              id="count"
              name="count"
              required
              min="0"
              value={formData.count}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

  function ReadView() {
    function LoadProducts() {
      // Read the robots from mongoDB:
      fetch("http://127.0.0.1:8081/listProducts")
        .then((response) => response.json())
        .then((myProducts) => loadMyRobots(myProducts));

      function loadMyRobots(myProducts) {
        // Find the element “col” in HTML
        var ProductsContainer =
          document.getElementById(
            "ProductsContainer"
          );

        ProductsContainer.innerHTML = "";

        ProductsContainer.innerHTML += `<div class="row border-bottom">
      <div class="row main align-items-center">
        <div class="col">Item:</div>
        <div class="col">Image:</div>
        <div class="col">Title:</div>
        <div class="col">Category:</div>
        <div class="col">Description:</div>
        <div class="col">Price:</div>
        <div class="col">Rating:</div>
      </div>
    </div>`;

        // Read every movie from the array
        for (var i = 0; i < myProducts.length; i++) {
          ProductsContainer.innerHTML += `
        <div class="row border-top" key=${myProducts[i]._id}>
        <div class="row main align-items-center">
          <div class="col">${myProducts[i].id}</div>
          <div class="col">
            <img class="img-fluid" width={30} src=${myProducts[i].image} alt="" />
          </div>
          <div class="col">${myProducts[i].title}</div>
          <div class="col">${myProducts[i].category}</div>
          <div class="col">${myProducts[i].description}</div>
          <div class="col">${myProducts[i].price}</div>
          <div class="col">${myProducts[i].rating.rate}</div>
        </div>
      </div>
          `;
        }
      }
    }

    function LoadProduct() {
      var singleRobotInput =
        document.getElementById("SingleRobotByID");

      fetch(
        "http://127.0.0.1:8081/listProducts/" +
        singleRobotInput.value
      )
        .then((response) => response.json())
        .then((myRobot) => loadMyRobot(myRobot))
        .catch(console.error);

      function loadMyRobot(myProduct) {
        // Find the element “col” in HTML
        var ProductsContainer =
          document.getElementById(
            "ProductsContainer"
          );

        ProductsContainer.innerHTML = "";

        ProductsContainer.innerHTML += `
        <div class="row border-bottom">
          <div class="row main align-items-center">
            <div class="col">Item:</div>
            <div class="col">Image:</div>
            <div class="col">Title:</div>
            <div class="col">Category:</div>
            <div class="col">Description:</div>
            <div class="col">Price:</div>
            <div class="col">Rating:</div>
          </div>
        </div>
        `;

        ProductsContainer.innerHTML += `
        <div class="row border-top" key=${myProduct._id}>
          <div class="row main align-items-center">
            <div class="col">${myProduct.id}</div>
            <div class="col">
              <img class="img-fluid" width={30} src=${myProduct.image} alt="" />
            </div>
            <div class="col">${myProduct.title}</div>
            <div class="col">${myProduct.category}</div>
            <div class="col">${myProduct.description}</div>
            <div class="col">${myProduct.price}</div>
            <div class="col">${myProduct.rating.rate}</div>
          </div>
        </div>
          `;
      }
    }

    return (
      <div className="container">
        <div class="row">
          <div class="col">
            <button
              class="btn border-black"
              onClick={LoadProducts}
            >
              Get All Products
            </button>
          </div>
          <div class="col">
            <input
              type="number"
              id="SingleRobotByID"
              placeholder="Enter product ID"
            ></input>
            <button
              class="btn border-black"
              onClick={LoadProduct}
            >
              Get All Products
            </button>
          </div>
        </div>
        <br />
        <div id="ProductsContainer"></div>
      </div>
    );
  }

  const UpdateView = () => {
    const [productId, setProductId] = useState(""); // Track product ID
    const [product, setProduct] = useState(null); // Store product details
    const [updatedData, setUpdatedData] = useState({}); // Track updated values

    // Fetch the product information by ID
    const fetchProduct = async () => {
      if (productId) {
        try {
          const response = await fetch(`http://localhost:8081/listProducts/${productId}`);
          if (response.ok) {
            const data = await response.json();
            setProduct(data); // Set product details to display in the form
          } else {
            console.error("Failed to fetch product");
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
    };

    // Update product details
    const handleUpdate = async () => {
      try {
        const response = await fetch(`http://localhost:8081/updateProduct/${productId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData), // Send updated data
        });
        if (response.ok) {
          console.log("Product updated successfully!");
        } else {
          console.error("Failed to update product");
        }
      } catch (error) {
        console.error("Error updating product:", error);
      }
    };

    // Handle change in form inputs
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdatedData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    return (
      <div className="container">
        <h1>Update Product</h1>

        {/* Input to enter product ID */}
        <div className="mb-3">
          <label htmlFor="productId" className="form-label">
            Product ID
          </label>
          <input
            type="number"
            className="form-control"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
          <button className="btn btn-info" onClick={fetchProduct}>
            Fetch Product
          </button>
        </div>

        {product && (
          <div>
            <h2>Current Product Details</h2>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating.rate}</p>

            {/* Form to update product details */}
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                New Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={updatedData.price || product.price}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                New Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={updatedData.title || product.title}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                New Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={updatedData.description || product.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              className="btn btn-success"
              onClick={handleUpdate}
            >
              Update Product
            </button>
          </div>
        )}
      </div>
    );
  };


  function DeleteView() {
    const [index, setIndex] = useState(0);
    const [products, setProducts] = useState([
      {
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: "",
      },
    ]);

    useEffect(() => {
      fetch("http://127.0.0.1:8081/listProducts")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          console.log(
            "Load initial Catalog of Products in DELETE :",
            data
          );
        });
    }, []);

    // Function to review products like carousel
    function getOneByOneProductNext() {
      if (products.length > 0) {
        if (index === products.length - 1) setIndex(0);
        else setIndex(index + 1);
      }
    }
    // Function to review products like carousel
    function getOneByOneProductPrev() {
      if (products.length > 0) {
        if (index === 0) setIndex(products.length - 1);
        else setIndex(index - 1);
      }
    }

    // Delete de product by its id <- id is Hook
    const deleteOneProduct = (id) => {
      console.log("Product to delete :", id);
      fetch("http://localhost:8081/deleteProduct/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      })
        .then((response) => {
          if (response.status !== 200) {
            return response
              .json()
              .then((errData) => {
                throw new Error(
                  `POST response was not ok :\n Status:${response.status}. \n Error: ${errData.error}`
                );
              });
          }
          return response.json();
        })
        .then((data) => {
          console.log(
            "Delete a product completed : ",
            id
          );
          console.log(data);
          // reload products from the local products array
          const newProducts = products.filter(
            (product) => product.id !== id
          );
          setProducts(newProducts);
          setIndex(0);
          // show alert
          if (data) {
            alert(
              "Product Sucessfully deleted"
            );
          }
        })
        .catch((error) => {
          console.error(
            "Error adding item:",
            error
          );
          alert(
            "Error adding robot:" +
            error.message
          ); // Display alert if there's an error
        });
    };

    function confirmDeletion() {
      let text =
        "Are you sure you want to delete this product?\nPress OK to continue.";
      if (window.confirm(text) === true) {
        deleteOneProduct(products[index].id);
      }
    }

    return (
      <div className="container">
        {/* Buttons to simulate carousel */}
        <h3 class="text-center">
          Select a product to delete:
        </h3>
        <div class="row">
          <button
            class="btn col-1"
            onClick={() =>
              getOneByOneProductPrev()
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </button>
          <div
            class="col text-center"
            key={products[index].id}
          >
            <img
              src={
                products[index]
                  .image
              }
              width={30}
            />{" "}
            <br />
            Id:{products[index].id} <br />
            Title: {
              products[index].title
            }{" "}
            <br />
            Category:{" "}
            {products[index].category}{" "}
            <br />
            Price: {
              products[index].price
            }{" "}
            <br />
            Rating :
            {
              products[index].rating
                .rate
            }{" "}
            (Averaged over{" "}
            {products[index].rating.count}{" "}
            rating/s)
            <br />
          </div>
          <button
            class="btn col-1"
            onClick={() =>
              getOneByOneProductNext()
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
        </div>
        <div class="row">
          <div class="col"></div>
          <button
            class="btn border-black col-4 btn-outline-danger"
            onClick={() =>
              confirmDeletion()
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
            Delete
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
          </button>
          <div class="col"></div>
        </div>
      </div>
    );
  }

  function createHeader() {
    return (
      <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <p
              class="nav-link active"
              id="navitem-1"
              onClick={
                changeViewStudents
              }
            >
              Students
            </p>
          </li>
          <li class="nav-item">
            <p
              class="nav-link"
              id="navitem-2"
              onClick={
                changeViewCreate
              }
            >
              Create
            </p>
          </li>
          <li class="nav-item">
            <p
              class="nav-link"
              id="navitem-3"
              onClick={changeViewRead}
            >
              Read
            </p>
          </li>
          <li class="nav-item">
            <p
              class="nav-link"
              id="navitem-4"
              onClick={
                changeViewUpdate
              }
            >
              Update
            </p>
          </li>
          <li class="nav-item">
            <p
              class="nav-link"
              id="navitem-5"
              onClick={
                changeViewDelete
              }
            >
              Delete
            </p>
          </li>
        </ul>
      </header>
    );
  }

  function createFooter() {
    return (
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-body-secondary">
          Com S 319
          <br></br>Niraj Amin & Alex Gaudineer
        </p>
      </footer>
    );
  }

  return (
    <div>
      {createHeader()}
      <div class="container">
        {viewer === 1 && <StudentView />}
        {viewer === 2 && <CreateView />}
        {viewer === 3 && <ReadView />}
        {viewer === 4 && <UpdateView />}
        {viewer === 5 && <DeleteView />}
        {createFooter()}
      </div>
    </div>
  );
}

export default App;
