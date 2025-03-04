import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.bucket);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch (error) {
            console.log("AppWrite service :: CreatePost :: Error ::--  ", error);

        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, {
                title,
                content,
                featuredImage,
                status,
            }
            )

        } catch (error) {
            console.log("AppWrite service :: UpadatePost :: Error ::--  ", error);

        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("AppWrite service :: DeletePost :: Error ::--  ", error);
            return false;

        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }
        catch (error) {
            console.log("AppWrite service :: GetPost :: Error ::--  ", error);

        }
    }

    async getPosts(queris = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queris,
            )
        } catch (error) {
            console.log("AppWrite service :: GetPost's :: Error ::--  ", error);
            return false;

        }
    }

    /// file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("AppWrite service :: UploadFile :: Error ::--  ", error);

        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("AppWrite service :: DeleteFile's :: Error ::--  ", error);
            return false
        }

    }

    getFilePriview(fileId) {
        return this.bucket.getFilePriview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();
export default service;