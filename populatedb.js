#! /usr/bin/env node



require("dotenv").config

const userArgs = process.argv.slice(2);

const Post = require("./models/blogModel")

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const content = `INTRODUCTION AND CHAPTER ONE – Who is a Soldier?

As part of my desire to study God’s word this year, I set the YouVersion Bible App to send me their ‘verse of the day.’

One of the verses that resonated with me was 2 Timothy 2:4 (King James 2000 Bible) which says, “No man that wars entangles himself with the affairs of this life; that he may please him who has chosen him to be a soldier.”

I was compelled to compare what the Bible says about being a soldier of Christ, to the expectation of a nation’s soldiers. It dawned on me that the principles used in training earthly soldiers came from the word of God.

This book is a well-researched, concise topical study about what it means to be a soldier for Christ. Especially, in the world that we live in today, where such topics are no longer a feature on the pulpit or discussion points during our bible study sessions. It is simply rare to acquire, however relevant it is to the life of a disciple of Christ.
In the 1st chapter I lay a foundation for the discussion in this book by taking time to define some key words which will form the basis for the information shared in the book and will help my reader grasp the message in my book. Example of words defined to give clarity to the message shared are: Soldier, commanding officer, civilian, entangle, enlist, active duty`

const mongoDB = userArgs[0];
  
  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createPost("Chapter One – The Ambassador", "Bible", content);
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }


  async function createPost(blogtitle, ...others) {
    const post = new Post({ 
        title : blogtitle,
        tag : others[0],
        content: others[1]
    });
    await post.save();
    console.log(`Added category: ${post.title}`);
  }