const fs = require("fs");

// fs.mkdir("Async FS", (err) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("Error:", err);
//     console.log("Folder Created");
//   }
// });

// fs.writeFile("Async FS/bio.txt", "Ohayo Gozaimasu", (err) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("Error:", err);
//     console.log("File Created");
//   }
// });

// fs.appendFile(                                               //*Append File Also Creates The File If It Doesn't Exist So Giving Wrong
//   "Async FS/bio.txt",                                        //"File Name" Won't Give You Error But Create The File With The Given Data.
//   "\nStillwater Here, Your Everyday Coder </>",              //On The Other Hand Giving Wrong Directory (Folder) Name Will Cause An Error*
//   (err) => {
//     if (err) {
//       console.log("Error:", err);
//     } else {
//       console.log("Error:", err);
//       console.log("File Updated");
//     }
//   }
// );

// fs.readFile("Async FS/bio.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("Error:", err);
//     console.log(data);
//   }
// });

// fs.rename("Async FS/bio.txt", "Async FS/myBio.txt", (err) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("Error:", err);
//     console.log("File Renamed");
//   }
// });

// fs.unlink("Async FS/myBio.txt", (err) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("Error:", err);
//     console.log("File Deleted");
//   }
// });

// fs.rmdir("Async FS", (err) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("Error:", err);
//     console.log("Folder Deleted");
//   }
// });

// TASKS COMPLETED GGWP
