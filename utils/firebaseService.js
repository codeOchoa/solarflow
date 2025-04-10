import { getFirestore, collection, getDocs, getDoc, doc, setDoc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { app } from "@/firebase/config";

const db = getFirestore(app);

// Products
export const getAllProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);
    return productSnap.exists() ? { id: productSnap.id, ...productSnap.data() } : null;
};

export const getProductBySlug = async (slug) => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const product = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .find(product => product.slug === slug);

    return product || null;
};

export const createProduct = async (data) => {
    const productsRef = collection(db, "products");
    const newDoc = await addDoc(productsRef, data);
    return newDoc.id;
};

// Categories
export const getAllCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getCategoryById = async (id) => {
    const categoryRef = doc(db, "categories", id);
    const categorySnap = await getDoc(categoryRef);
    return categorySnap.exists() ? { id: categorySnap.id, ...categorySnap.data() } : null;
};

export const createCategory = async (data) => {
    const categoriesRef = collection(db, "categories");
    const newDoc = await addDoc(categoriesRef, data);
    return newDoc.id;
};

// Users
export const getAllUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getUserById = async (id) => {
    const userRef = doc(db, "users", id);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? { id: userSnap.id, ...userSnap.data() } : null;
};

export const getUserByEmail = async (email) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const user = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .find(u => u.email === email);

    return user || null;
};

// Orders
export const getAllOrders = async () => {
    const querySnapshot = await getDocs(collection(db, "orders"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getOrderById = async (id) => {
    const orderRef = doc(db, "orders", id);
    const orderSnap = await getDoc(orderRef);
    return orderSnap.exists() ? { id: orderSnap.id, ...orderSnap.data() } : null;
};

export const createOrder = async (data) => {
    const ordersRef = collection(db, "orders");
    const newDoc = await addDoc(ordersRef, data);
    return newDoc.id;
};

export const updateOrder = async (id, data) => {
    const orderRef = doc(db, "orders", id);
    await updateDoc(orderRef, data);
    return true;
};

export const deleteOrderById = async (id) => {
    const orderRef = doc(db, "orders", id);
    await deleteDoc(orderRef);
    return true;
};

// Wishlist
export const getWishlist = async () => {
    const querySnapshot = await getDocs(collection(db, "wishlist"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getWishlistByUserId = async (userId) => {
    const querySnapshot = await getDocs(collection(db, "wishlist"));
    return querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(item => item.userId === userId);
};

export const isProductInWishlist = async (userId, productId) => {
    const querySnapshot = await getDocs(collection(db, "wishlist"));
    const match = querySnapshot.docs.find(doc =>
        doc.data().userId === userId && doc.data().productId === productId
    );
    return !!match;
};

export const addToWishlist = async (userId, product) => {
    const ref = collection(db, "wishlist");
    const newDoc = await addDoc(ref, {
        userId,
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.mainImage,
        slug: product.slug,
        stockAvailabillity: product.inStock,
    });
    return newDoc.id;
};

export const removeFromWishlist = async (userId, productId) => {
    const querySnapshot = await getDocs(collection(db, "wishlist"));
    const match = querySnapshot.docs.find(doc =>
        doc.data().userId === userId && doc.data().productId === productId
    );
    if (match) {
        await deleteDoc(doc(db, "wishlist", match.id));
        return true;
    }
    return false;
};

// Cart
export const getCart = async () => {
    const querySnapshot = await getDocs(collection(db, "cart"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Checkout
export const getCheckout = async () => {
    const querySnapshot = await getDocs(collection(db, "checkout"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const createCheckout = async (data) => {
    const checkoutRef = collection(db, "checkout");
    const newDoc = await addDoc(checkoutRef, data);
    return newDoc.id;
};

// Login
export const getLoginEvents = async () => {
    const querySnapshot = await getDocs(collection(db, "login"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Logout
export const getLogoutEvents = async () => {
    const querySnapshot = await getDocs(collection(db, "logout"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Order-product
export const getOrderProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "order-product"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const createOrderProduct = async (data) => {
    const ref = collection(db, "order-product");
    const newDoc = await addDoc(ref, data);
    return newDoc.id;
};

// Payment
export const getPayments = async () => {
    const querySnapshot = await getDocs(collection(db, "payment"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Register
export const getRegisterEvents = async () => {
    const querySnapshot = await getDocs(collection(db, "register"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};