class MediaItem {
    static MediaItemediaItemcount =0;
    constructor(title, year, genre){
     this.title = title
this.year = year
this.genre = genre

MediaItem.MediaItemcount++;
}
describe() {
    return`${this.title} ${this.year} ${this.genre}`
}
}

class Book extends mediaIthem{
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
}