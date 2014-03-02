<?php

// if the url field is empty
if(isset($_POST['url']) && $_POST['url'] == ''){

	// then send the form to your email
	mail( 'chris@see8ch.com', 'Contact Form', print_r($_POST,true) );
}

include('includes/head.php'); ?>

<body id="hire-sent">

<?php include('includes/nav.php'); ?>

<!-- Begin Content -->
<div class="content-wrapper">
	<h2>Thanks</h2>
	<p>I will get back to you as soon as possible.</p>
	<a href="/">Back to Home</a>
</div>
<!-- End Content -->

<?php include('includes/footer.php'); ?>