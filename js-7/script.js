class MediaItem {
    static count =0;
    constructor(title, year, genre){
     this.title = title
this.year = year
this.genre = genre

MediaItem.count++;
}
describe() {
    return`${this.title} ${this.year} ${this.genre}`
}
}

class Book extends MediaItem{
    constructor(title,year,genre,author,pages){
    super(title,year,genre)
    this.author = author
    this.pages = pages
}
describe() {
    return `${super.describe()} ${this.author} ${this.pages}`;
}
isClassic() {
    return new Date().getFullYear() - this.year > 50;
}
}
class Podcast extends MediaItem {
    constructor(title,year,genre,host,episodes){
    super(title,year,genre)
    this.host = host
    this.episodes = episodes
    }
describe(){
    return `${super.describe()} ${this.host} ${this.episodes}`
}
addEpisode(){
this.episodes++;
}
}
const book1 = new Book(
    "Harry Potter",
    1997,
    "Fantasy",
    "J.K. Rowling",
    350
);
const podcast1 = new Podcast(
    "Tech Talk",
    2024,
    "Technology",
    "Daniel",
    10
);
console.log(book1.describe());

console.log(book1.isClassic());

console.log(podcast1.describe());

podcast1.addEpisode();

console.log(podcast1.episodes);

console.log(MediaItem.count);