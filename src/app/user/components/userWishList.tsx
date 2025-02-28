"use client";
import React, { useState, useEffect } from "react";
import { Book } from "@/types/book";
import UserLibraryCard from "@/app/user/components/userLibraryCard";
import { userWishList } from "@/services/user";

const UserWishList: React.FC<{clientID: number}> = ({clientID}) => {
    const [bookList, setBookList] = useState<Book[]>([]); // ✅ Store real book data
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLibrary = async () => {
            try {
                // Step 1: Fetch user library (only book IDs)
                const userWishList_ = await userWishList(clientID);

                if (!userWishList_ || userWishList_.length === 0) {
                    setLoading(false);
                    return;
                }

                setBookList(userWishList_);
            } catch (error) {
                console.error("Error fetching library:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLibrary();
    }, []);

    return (
        // <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center">
        <div className="w-full bg-zinc-100 shadow-sm rounded-md min-h-0 overflow-hidden">
            {loading ? (
                <p className="text-center py-4">Loading your Wishlist ...</p>
            ) : bookList.length === 0 ? (
                <p className="text-center py-4">Adding some wish list ...</p>
            ) : (
                <div className="flex space-x-6 overflow-x-auto py-4 scrollbar-hide mx-3">

                    {bookList.map((book) => (
                        <UserLibraryCard
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            author={book.author}
                            cover_image_url={book.cover_image_url}
                            rating={book.rating}
                        />
                    ))}
                </div>
            )}

        </div>
    );
};

export default UserWishList;
