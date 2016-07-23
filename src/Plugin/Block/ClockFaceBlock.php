<?php

namespace Drupal\react_quickstart\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Clock Face' Block
 *
 * @Block(
 *   id = "clock_face",
 *   admin_label = @Translation("Clock Face Block"),
 * )
 */
class ClockFaceBlock extends BlockBase {
    /**
     * {@inheritdoc}
     */
    public function build() {
        return array(
            '#markup' => "<div id='clock'></div>",
            '#attached' => array(
                'library' =>  array(
                    'react_quickstart/clock'
                ),
            ),
        );
    }
}
?>