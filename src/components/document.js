import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';

import './document.css';

class Document extends Component {
    state = {
        docs: [
            {
                title: 'git - depo oluşturmak',
                html: '<p>Yeni depo oluşturmak için klasör içerisinde</p><div class="cmd">git init</div><p>komutunu çalıştırın</p>',
            },
            {
                title: 'git - depo kopyalamak',
                html: '<p>Deponuzun çalışan kopyasını oluşturmak için;</p><div class="cmd">git clone /yol/depo</div><p>github, bitbucket gibi uzak sunucular için;</p><div class="cmd">git clone kullaniciAdi@sunucu:/yol/depo</div>',
            },
            {
                title: 'git - hayat döngüsü',
                html: '<p>Deponuz git tarafından yönetilen 3 ağaçtan oluşur.</p>' +
                    '<div class="d-flex justify-content-between w-50">' +
                    '<p>İlki dosyalarınızı tutan</p>' +
                    '<code>working dir</code>' +
                    '</div>' +
                    '<div class="d-flex justify-content-between w-50">' +
                    '<p>İkincisi dosyalarınızı tuttuğunuz</p>' +
                    '<code>stage</code>' +
                    '</div>' +
                    '<div class="d-flex justify-content-between w-50">' +
                    '<p>Sonuncusu yaptığınız commit\'i gösteren\t</p>' +
                    '<code>head</code>' +
                    '</div>' +
                    '',
            },
            {
                title: 'git - eklemek & işlemek',
                html: '<p>Değişikliklerinizi stage\'e belirtmek için,</p>' +
                    '<div class="cmd">git &lt;dosya/klasörAdı&gt;</div>' +
                    '<p>düzenli ifadeleri destekler</p>' +
                    '<div class="cmd">git *</div>' +
                    '<p>git hayat döngüsünde ilk adımdır. Yaptığınız' +
                    'değişikliklere not düşüp işlemek gerekecektir</p>' +
                    '<div class="cmd">git commit -m "notunuz"</div>' +
                    '<p>Hayat döngüsündeki son aşama olan <em>head</em> bölümüne' +
                    'eklendi, henüz sunucu da değiller.</p>',
            },
            {
                title: 'git - sunucuya göndermek',
                html: '<p>Değişiklikleriniz yerel depodaki <em>head</em> içerisinde, sunucuya göndermek için;</p>' +
                    '<div class="cmd">git push origin master</div>' +
                    '<p>değişiklikleriniz master dalına gider, kodlarınızın kararlı olduğu daldır.sunucunuz (uzak depo; github, bitbucket vs.) yoksa, eklemek için;</p>' +
                    '<div class="cmd">git remote add origin &lt;sunucu&gt;</div>',
            },
            {
                title: 'git - dallar',
                html: '<p>Farklı özellikleri ayrı ayrı geliştirmek için dallar tercih edilir. Varsayılan dal <em>master</em>\'dır. Diğer dallar geliştirildikten sonra master\'a birleştirilir.\n' +
                    '"ozellik_a" adıyla yeni bir dal oluşturup o dala geçmek için</p>' +
                    '<div class="cmd">git checkout -b ozellik_a</div>' +
                    '<p><em>master</em>\'a geri geçmek için</p>' +
                    '<div class="cmd">git checkout master</div>' +
                    '<p>oluşturduğumuz dalı silmek için</p>' +
                    '<div class="cmd">git branch -d ozellik_a</div>' +
                    '<p>bir dalı uzak deponuza göndermedikçe başkaları tarafından kullanılamaz</p>' +
                    '<div class="cmd">git push origin &lt;dal&gt;</div>',
            },
            {
                title: 'git - güncelleme & birleştirme',
                html: '<p>Son işlenen değişiklikleri yerel deponuza almak için\</p>' +
                    '<div class="cmd">git pull</div>' +
                    '<p>Alınan bu değişiklikleri alma <em>fetch</em> ve birleştirme <em>merge</em> işlemlerine tabi tutacaktır. Aktif çalıştığınız <em>dal</em>a başka bir dalı birleştirmek için</p>' +
                    '<div class="cmd">git merge &lt;dal&gt;</div>' +
                    '<p>Her iki durum için, <strong>git</strong> değişiklikleri otomatik birleştirme auto-merging dener. Her zaman mümkün olmamakla birlikte çakışmalarla conflict sonulanabilir. git size çakışmaları gösterdiği takdirde el ile düzeltmek size düşer. Değişikliklerden sonra dosya eklemek için</p>' +
                    '<div class="cmd">git add &lt;dosya/klasörAdı&gt;</div>' +
                    '<p>değişiklikleri birleştirmeden önce dallar arasındaki farklılıkları görmek için</p>' +
                    '<div class="cmd">git diff &lt;kaynak_dal&gt; &lt;hedef_dal&gt;</div>',
            },
            {
                title: 'git - sürümleme (tag)',
                html: '<p>Deponuz için sürüm adı tag oluşturmanız tavsiye edilir. SVN\'de de mevcut olan aşina olunan bir kavramdır. 0.1 adıyla bir tag oluşturmak için</p>' +
                    '<div class="cmd">git tag 0.1 edf04a7</div>' +
                    '<p>edf04a7 deponuzdaki işlenen commit numarasının ilk 10 karakteridir. Tüm işlenen numaralarını görmek için</p>' +
                    '<div class="cmd">git log</div>',
            },
            {
                title: 'git - yerel değişiklikleri geri almak',
                html: '<p>Yanlış birşey yapmanız durumunda yerel deponuzdaki değişiklikleri geri almak için</p>' +
                    '<div class="cmd">git checkout -- &lt;dosyaadı&gt;</div>' +
                    '<p>bu işlem, head içerisindeki son içerik ile değiştirilir. Diğer dosyalar güvende. Bütüm yerel değişiklik ve işlenenlerinizi iptal etmek istiyorsanız, sunucudan en son kayıtları getirin</p>' +
                    '<div class="cmd">git fetch origin</div>' +
                    '<p>ve yerel master dalınıza gösterin\</p>' +
                    '<div class="cmd">git reset --hard origin/master</div>',
            },
            {
                title: 'git - son değişiklikleri ziplemek',
                html: '<div class="cmd">git archive -o ../guncelleme.zip HEAD $(git diff --name-only HEAD^)</div>',
            },
            {
                title: 'git - iki commit arasındaki değiştirilmiş dosyaları ziplemek',
                html: '<div class="cmd">git archive -o ../son.zip &lt;yeni_commit_id&gt; $(git diff --name-only &lt;eski_commit_id&gt; &lt;yeni_commit_id&gt;)</div>',
            }
        ]
    };


    render() {
        return (
            <section id="documentation">
                <div className="qa">
                    <div className="title-container container my-3">
                        <h1 className="title"># git soru &amp; cevap</h1>
                        <p>İnternette rastlamış olduğum benzersiz soruları ve cevapları burada listeliyor olacağım.</p>
                    </div>
                </div>
                <hr/>
                <div className="doc container">
                    <div className="title-container my-3">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="title"># git kullanım rehberi</h1>
                                <p>git anlaşılır temiz kullanım rehberi</p>
                                <hr/>
                                <div className="doc-list">
                                    {this.state.docs.map((item, i) => {
                                        return (
                                            <React.Fragment key={'doc_f' + i}>
                                                <div className='doc-item'>
                                                    <h2 className='title'># {item.title}</h2>
                                                    {ReactHtmlParser(item.html)}
                                                </div>
                                                <hr/>
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Document;
