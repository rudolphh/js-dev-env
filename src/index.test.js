import cheerio from 'cheerio';
import {expect} from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';

const $ = cheerio.load(fs.readFileSync('./src/index.html', 'utf-8'));

describe('our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say Grace Alone', () => {
    const index = fs.readFileSync('./src/index.html', 'utf8');
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal('Grace Alone');
    dom.window.close();
  });

  it('should say Then Faith', () => {
    expect($('h2').first().text()).to.equal('Then Faith');
  });
})
