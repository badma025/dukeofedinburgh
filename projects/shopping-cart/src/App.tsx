import { useState } from "react";
import { useQuery } from "react-query";
// Components
import Cart from "./components/Cart/Cart";
import { Drawer, LinearProgress, Grid, Badge } from "@mui/material";
import Item from "./components/Item/Item";
import AddShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// Styles
import { Wrapper, StyledButton } from "./App.styles";
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce((ack: number, item) => ack + item.amount, 0);
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      // is the item already in the cart
      // think of .find() as a query
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      // then we map through the cart checking if the item id is in the cart and if so we update the amount by 1
      if (isItemInCart) {
        return prev.map((item) => {
          return item.id === clickedItem.id
            ? {
                ...item,
                amount: item.amount + 1,
              }
            : item;
        });
      } else {
        // first time the item is added
        // update the amount
        return [...prev, { ...clickedItem, amount: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;

  if (error) return <div>Something went wrong.</div>;

  return (
    <Wrapper>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setIsCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => {
          return (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </Wrapper>
  );
};

export default App;
