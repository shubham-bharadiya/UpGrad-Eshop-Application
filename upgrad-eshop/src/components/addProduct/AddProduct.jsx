/* Add and Edit product */

import { useContext, useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../../common/Auth/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { Box, CircularProgress, TextField, Typography } from "@mui/material";
import NavigationBar from "../../common/NavBar/NavBar";
import SubmitButtonMui from "../../common/MuiComponents/Buttons/SubmitButtonMui";
import axios from "axios";
import { SuccessToast, ErrorToast } from "../../common/Toasts/Toasts";
import "./AddProduct.css";

function AddProduct() {
  const { authToken, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = id !== undefined;
  const [name, setName] = useState("");
  const [category, setCategory] = useState();
  const [manufacturer, setManufacturer] = useState("");
  const [availableItems, setAvailableItems] = useState();
  const [price, setPrice] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [nameError, setNameError] = useState(false);
  const [manufacturerError, setManufacturerError] = useState(false);
  const [availableItemsError, setAvailableItemsError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products/categories", {
        headers: {
          "x-auth-token": `${authToken}`,
        },
      })
      .then(function (response) {
        setCategoryList(response.data);
      })
      .catch(function () {
        ErrorToast("Error observed: There was an issue in retrieving categories list.");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isEditMode) {
      setDataLoading(true);
      axios
        .get(`http://localhost:8080/api/products/${id}`, {
          headers: {
            "x-auth-token": `${authToken}`,
          },
        })
        .then((response) => {
          const data = response.data;
          setName(data.name);
          const categoryName = data.category;
          setCategory({ label: categoryName, value: categoryName });
          setManufacturer(data.manufacturer);
          setAvailableItems(data.availableItems);
          setPrice(data.price);
          setImageUrl(data.imageUrl);
          setProductDescription(data.description);
        })
        .catch(() =>
          ErrorToast("Error observed: There was an issue in retrieving product details.")
        )
        .finally(() => setDataLoading(false));
    }
  }, [isEditMode, id, authToken]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameError(false);
    setManufacturerError(false);
    setAvailableItemsError(false);
    setPriceError(false);

    if (name === "") {
      setName(true);
    }
    if (manufacturer === "") {
      setManufacturer(true);
    }
    if (availableItems === "") {
      setAvailableItemsError(true);
    }
    if (price === "") {
      setPriceError(true);
    }

    if (name && manufacturer && category.value && availableItems && price) {
      if (isEditMode) {
        axios
          .put(
            `http://localhost:8080/api/products/${id}`,
            {
              name: name,
              category: category.value,
              manufacturer: manufacturer,
              availableItems: availableItems,
              price: price,
              imageUrl: imageUrl,
              description: productDescription,
            },
            {
              headers: {
                "x-auth-token": `${authToken}`,
              },
            }
          )
          .then(function () {
            SuccessToast(`Product ${name} updated successfully!`);
            navigate("/products");
          })
          .catch(function () {
            ErrorToast(
              `Error observed: There was an issue is updating the product ${name}.`
            );
          });
      } else {
        axios
          .post(
            "http://localhost:8080/api/products",
            {
              name: name,
              category: category.value,
              manufacturer: manufacturer,
              availableItems: availableItems,
              price: price,
              imageUrl: imageUrl,
              description: productDescription,
            },
            {
              headers: {
                "x-auth-token": `${authToken}`,
              },
            }
          )
          .then(function () {
            SuccessToast(`Product ${name} added successfully!`);
            navigate("/products");
          })
          .catch(function () {
            ErrorToast(`Error observed: There was an issue in adding the product: ${name}.`);
          });
      }
    }
  };
  return (
    <div>
      <NavigationBar isLogged={authToken !== null} isAdmin={isAdmin} />
      <div className="addContainer">
        {dataLoading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : (
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Typography gutterBottom variant="h5" component="p" sx={{ mb: 3 }}>
              {isEditMode ? "Update Product" : "Add Product"}
            </Typography>
            <TextField
              label="Name"
              onChange={(e) => setName(e.target.value)}
              required
              variant="outlined"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={name}
              error={nameError}
            />
            <div style={{ marginBottom: "30px" }}>
              <CreatableSelect
                className="basic-single"
                classNamePrefix="select"
                name="category"
                isClearable
                required
                options={categoryList.map((item) => ({
                  label: item,
                  value: item,
                }))}
                value={category}
                onChange={(data) => setCategory(data)}
              />
            </div>
            <TextField
              label="Manufacturer"
              onChange={(e) => setManufacturer(e.target.value)}
              required
              variant="outlined"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={manufacturer}
              error={manufacturerError}
            />
            <TextField
              label="Available Items"
              onChange={(e) => setAvailableItems(e.target.value)}
              required
              variant="outlined"
              type="number"
              sx={{ mb: 3 }}
              fullWidth
              value={
                availableItems !== undefined
                  ? Number(availableItems)
                  : availableItems
              }
              error={availableItemsError}
            />
            <TextField
              label="Price"
              onChange={(e) => setPrice(e.target.value)}
              required
              variant="outlined"
              type="number"
              value={price !== undefined ? Number(price) : price}
              error={priceError}
              fullWidth
              sx={{ mb: 3 }}
            />
            <TextField
              label="Image URL"
              onChange={(e) => setImageUrl(e.target.value)}
              variant="outlined"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={imageUrl}
            />
            <TextField
              label="Product Description"
              onChange={(e) => setProductDescription(e.target.value)}
              variant="outlined"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={productDescription}
            />
            <SubmitButtonMui
              value={isEditMode ? "Update Product" : "Add Product"}
            />
          </form>
        )}
      </div>
    </div>
  );
}

export default AddProduct;