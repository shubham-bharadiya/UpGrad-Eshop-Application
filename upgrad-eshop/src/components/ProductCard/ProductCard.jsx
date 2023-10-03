  import { Card, CardMedia, Grid, IconButton, CardActions, CardContent, Typography } from "@mui/material";
  import DeleteIcon from "@mui/icons-material/Delete";
  import EditIcon from "@mui/icons-material/Edit";
  import BuyProductButtonMui from "../../common/MuiComponents/Buttons/BuyProductButtonMui";
  import ConfirmDialogMui from "../../common/MuiComponents/Dialog/ConfirmDialogMui";
  import { useState } from "react";
  import "./ProductCard.css";
  
  function ProductCard(props) {
    const { productData, isAdmin, handleDeleteCall, navigate } = props;
    const key = props.productData.id;
    const [openDialog, setOpenDialog] = useState(false);
  
    const handleOpenDialog = () => {
      setOpenDialog(true);
    };
  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };
  
    const handleDeleteWithConfirmation = () => {
      handleOpenDialog();
    };
  
    const handleConfirmDelete = () => {
      handleDeleteCall();
      handleCloseDialog();
    };
    return (
      <Grid key={key} item xs={4}>
        <Card>
          <CardMedia
            sx={{ height: 180 }}
            image={
              productData.imageUrl.length > 0
                ? productData.imageUrl
                : "https://via.placeholder.com/600/771796"
            }
            title={productData.name}
          />
           <CardContent className="card-content-wrapper custom-scrollbar">
            <div className="card-content">
              <Typography gutterBottom variant="h5" component="div">
                {productData.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                ₹{productData.price}
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              {productData.description}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              alignSelf: "stretch",
              display: "flex",
              justifyContent: isAdmin ? "space-between" : "flex-start",
              margin: "0 10px",
            }}
          >
            <div>
              <BuyProductButtonMui
                onClick={() => navigate(`/products/${productData.id}`)}
                value="BUY"
              />
            </div>
            {isAdmin && (
              <div>
                <IconButton onClick={handleDeleteWithConfirmation}>
                  <DeleteIcon />
                </IconButton>
                <ConfirmDialogMui
                  open={openDialog}
                  onClose={handleCloseDialog}
                  onConfirm={handleConfirmDelete}
                  title="Confirm deletion of this product!"
                  content="Are you sure you want to delete this product?"
                />
                <IconButton
                  onClick={() => navigate(`/edit-product/${productData.id}`)}
                >
                  <EditIcon />
                </IconButton>
              </div>
            )}
          </CardActions>
        </Card>
      </Grid>
    );
  }
  
  export default ProductCard;