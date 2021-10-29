<?php
?>
    <main>
        <div class="container">
            <div class="row">
            </div>
        </div>
        <section class="container">
            <article class="row">
                <div class="p-4 p-md-4 mb-4 text-white rounded ">
                    <div class="col-md-12 px-0">
                        <h1 class="display-4 fst-italic">Bienvenue sur Pickaria !</h1>
                        <p class="lead my-3">Pickaria est un serveur minecraft français qui a ouvert ses portes pour la
                            première fois en 2018.
                            <br>Il est constitué d'un serveur classique 1.16.4+ et d'un serveur en Snapshot 1.17 </p>
                        <!-- <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>-->
                        <img class="imgcote" src="img/meilleurs-seeds-graines-minecraft-1-14-ferme-animaux-plat.jpg">
                    </div>
                </div>
            </article>

        </section>
        <hr>
        <div class="container ">
            <?php
$bdd = new PDO ('mysql:host =localhost;dbname=pickaria','root','');

$sql= 'SELECT * FROM article';
?>
            <div class="row ">
                <?php
                foreach ($bdd->query($sql) as $article):
                    ?>
                    <div class="col-md-3">
                        <div class="card bg-dark">
                            <div class="card-body">
                                <h5 class="card-title"><?= $article['Nom'] ?></h5>
                                <p class="card-text"><?= $article['Contenu'] ?></p>
                                <p class="card-text"><?= $article['article_ID'] ?></p>
                                <a href="./news.php" class="btn btn-primary">Lien de la news</a>
                            </div>
                        </div>
                    </div>
                <?php endforeach;?>
            </div>
        </div>
    </main>
